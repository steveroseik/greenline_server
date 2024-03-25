import { Injectable } from '@nestjs/common';
import { CreateItemInBoxInput } from './dto/create-item-in-box.input';
import { UpdateItemInBoxInput } from './dto/update-item-in-box.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemInBox } from './entities/item-in-box.entity';
import { DataSource, In, MoreThan, Repository } from 'typeorm';
import { ItemCountInput } from './dto/item-count.input';
import { InventoryItemHistoryService } from 'src/inventory-item-history/inventory-item-history.service';
import { ImportNewItemInput } from './dto/import-new-item.input';
import { ItemInBoxPageInput } from './dto/paginate-item-in-box.input';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { ItemInBoxPage } from './entities/item-in-box-page.entity';
import { ItemHistoryEnum } from 'support/enums';
import { Item } from 'src/item/entities/item.entity';
import { Box } from 'src/box/entities/box.entity';
import { InventoryItemHistory } from 'src/inventory-item-history/entities/inventory-item-history.entity';

@Injectable()
export class ItemInBoxService {

  constructor(
    @InjectRepository(ItemInBox) private readonly itemInBoxRepo:Repository<ItemInBox>,
    private inventoryHistoryService:InventoryItemHistoryService,
    private dataSource:DataSource){}

  create(createItemInBoxInput: CreateItemInBoxInput) {
    return 'This action adds a new itemInBox';
  }

  async createFake(input: any){

    await this.itemInBoxRepo.insert(input);
  }


  async findFromInventory(inventoryId:number): Promise<ItemInBox[]>{

    return await this.itemInBoxRepo.find({where: {inventoryId}})
  
  }

  async paginateItemInBox(input: ItemInBoxPageInput): Promise<ItemInBoxPage> {


    let queryBuilder = this.itemInBoxRepo.createQueryBuilder('itemInBox')

    if (input.inventoryIds !== undefined){
      queryBuilder = queryBuilder.where({inventoryId: In(input.inventoryIds)});
    }

    const nextPaginator = buildPaginator({
      entity: ItemInBox,
      paginationKeys: ['createdAt'],
      query: {
        limit: input.limit,
        order: input.isAsc ? 'ASC' : 'DESC',
        beforeCursor: input.beforeCursor,
        afterCursor: input.afterCursor
      },
    })

    return await nextPaginator.paginate(queryBuilder);
  }


  async findFromInventories(inventoryIds: readonly number[]): Promise<ItemInBox[]>{
    return await this.itemInBoxRepo.find({where: {inventoryId: In(inventoryIds)}})
  }

   async findFromSkus(itemSkus: readonly string[]): Promise<ItemInBox[]>{
    return await this.itemInBoxRepo.find({where: {itemSku: In(itemSkus), count: MoreThan(0)}})
  }

  async findItemsCount(keys: readonly {sku: string, inventoryId: number}[]): Promise<any[]>{

    let skus = keys.map((key) => (`'${key.sku}'`));

    skus = [...new Set(skus)]

    const query = `
      SELECT
          itemSku,
          inventoryId,
          SUM(count) AS total_count
      FROM
          item-in-box
      WHERE
          itemSku in (${skus.join(',')}) AND inventoryId = ${keys[0].inventoryId} AND count > 0
      GROUP BY
          itemSku, inventoryId;
    `;
    return this.itemInBoxRepo.query(query);

  }

  findItemOccurrence(itemSku:string){
    return this.itemInBoxRepo.countBy({itemSku})
  }

  async exportItem(input:ItemCountInput): Promise<Boolean>{

    const result = await this.itemInBoxRepo
        .createQueryBuilder()
        .update(ItemInBox)
        .set({ count: () => `count - ${input.count}`})
        .where('id = :id', { id: input.id, })
        .andWhere('count >= :count', {count: input.count})
        .execute();


      let type:ItemHistoryEnum;

      if (input.type !== ItemHistoryEnum.orderExport && 
          input.type !== ItemHistoryEnum.export){
            
            type = ItemHistoryEnum.export;
      }else{
        type = input.type;
      }
    if (result.affected === 1){
      return this.inventoryHistoryService.createHistory({
        itemInBoxId: input.id,
        description: `${input.count} item(s) exported out of Inventory`,
        type,
        amount: -input.count
      });
    }

    return false;
  }

  async importItem(input:ItemCountInput): Promise<Boolean>{

   
   // TODO:: find if this count overrides the exisiting count
    const result = await this.itemInBoxRepo.createQueryBuilder()
    .update({count: () => `count + ${input.count}`}).where({id: input.id}).execute();

    if (result.affected === 1){
      return this.inventoryHistoryService.createHistory({
        itemInBoxId: input.id,
        description: `${input.count} item(s) imported into the inventory.`,
        type: ItemHistoryEnum.import,
        amount: input.count
      });
    }

    return false;
  }

  async importNewItem(input:ImportNewItemInput): Promise<Boolean>{

    const queryRunner = this.dataSource.createQueryRunner();

    try{

      await queryRunner.connect();
      await queryRunner.startTransaction();

      if (input.boxId == undefined && input.ballotId == undefined) throw Error('no location specified')
      if (input.boxName && input.ballotId == undefined) throw Error('box name unspecificied')

      const item = await queryRunner.manager.findOne(Item, {where: {sku: input.itemSku}});
      if (item === null) throw Error('item does not exist');

      const merchantId = item.merchantId;
      let boxId: number
    
      /// box exist
      if (input.boxId !== undefined){
        boxId = input.boxId;
      }else{
        // should create new box
        const newBox = await queryRunner.manager.insert(Box, {
          name: input.boxName,
          merchantId: input.ownedByOneMerchant ? merchantId : null,
          ballotId: input.ballotId
        })

        if (newBox.raw.affectedRows === 1){
          boxId = newBox.raw.insertId;
        }else{
          throw Error('failed to create new box');
        }
      }
      
      /// create new itemInBox

      const response = await queryRunner.manager.insert(ItemInBox, {
        itemSku: input.itemSku,
        merchantId,
        boxId,
        count: input.count,
        minCount: input.minCount,
        inventoryId: input.inventoryId
      });

      if (response.raw.affectedRows !== 1) throw Error('failed to create new itemInBox');

      const historyResponse = await queryRunner.manager.insert(InventoryItemHistory, {

        itemInBoxId: response.raw.insertId,
        description: `${input.count} item(s) imported into BoxId:${input.boxId}`,
        type: ItemHistoryEnum.newImport,
        amount: input.count
      });

      if (historyResponse.raw.affectedRows !== 1) throw Error('failed to create history')

      await queryRunner.commitTransaction();

      return true;

    }catch (e){

      await queryRunner.rollbackTransaction();
      return e;

    }finally{
      queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all itemInBox`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemInBox`;
  }

  update(id: number, updateItemInBoxInput: UpdateItemInBoxInput) {
    return `This action updates a #${id} itemInBox`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemInBox`;
  }
}
