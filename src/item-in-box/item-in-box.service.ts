import { Injectable } from '@nestjs/common';
import { CreateItemInBoxInput } from './dto/create-item-in-box.input';
import { UpdateItemInBoxInput } from './dto/update-item-in-box.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemInBox } from './entities/item-in-box.entity';
import { In, Repository } from 'typeorm';
import { ItemCountInput } from './dto/export-item.input';
import { InventoryHistoryService } from 'src/inventory-history/inventory-history.service';
import { ImportItemInput } from './dto/import-item.input';
import { ItemInBoxPageInput } from './dto/paginate-item-in-box.input';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { ItemInBoxPage } from './entities/item-in-box-page.entity';

@Injectable()
export class ItemInBoxService {

  constructor(
    @InjectRepository(ItemInBox) private readonly itemInBoxRepo:Repository<ItemInBox>,
    private inventoryHistoryService:InventoryHistoryService){}

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
      paginationKeys: ['id'],
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

  async findItemsCount(inventoryIds: readonly number[]): Promise<any[]>{
    const query = `
      SELECT
        inventoryId,
        COUNT(*) as itemCount
      FROM
        itemInBox
      WHERE
        inventoryId IN (${inventoryIds.join(',')})
      GROUP BY
        inventoryId
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

    if (result.affected === 1){
      return this.inventoryHistoryService.createHistory({
        itemInBoxId: input.id,
        description: `${input.count} item(s) exported out of Inventory`,
        type: 1,
        amount: input.count
      });
    }

    return false;
  }

  async importItem(input:ItemCountInput): Promise<Boolean>{

    const result = await this.itemInBoxRepo.update({id: input.id}, {count: input.count});

    if (result.affected === 1){
      return this.inventoryHistoryService.createHistory({
        itemInBoxId: input.id,
        description: `${input.count} item(s) imported into the inventory.`,
        type: 1,
        amount: input.count
      });
    }

    return false;
  }

  async importNewItem(input:ImportItemInput): Promise<Boolean>{

    const result = await this.itemInBoxRepo.insert(input);

    if (result.raw.affectedRows === 1){
      return this.inventoryHistoryService.createHistory({
        itemInBoxId: result.raw.insertId,
        description: `${input.count} item(s) imported into BoxId:${input.boxId}`,
        type: 0,
        amount: input.count
      });
    }

    return false;
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
