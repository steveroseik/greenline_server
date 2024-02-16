import { Injectable } from '@nestjs/common';
import { UpdateItemInput } from './dto/update-item.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { faker } from '@faker-js/faker';
import { ItemPriceService } from 'src/item-price/item-price.service';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { PaginationInput } from 'support/pagination.input';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { paginateItemsInput } from './dto/paginate-items.input';
import { CreateMultipleItems } from './dto/create-multiple-item.input';
import { generateItemEntities } from 'support/item-entity.generator';
import { ItemPrice } from 'src/item-price/entities/item-price.entity';
import { CreateItemPriceInput } from 'src/item-price/dto/create-item-price.input';
import { ItemPriceList } from 'src/item-price-list/entities/item-price-list.entity';
import { CreateSingleItemInput as CreateSingleItemInput } from './dto/item-single.input';

@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item) private readonly itemRepo:Repository<Item>,
    private itemPriceService:ItemPriceService,
    private dataSource:DataSource){}


  async create(input: CreateMultipleItems[]) {

    const queryRunner = this.dataSource.createQueryRunner();
    
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try{
    
      const batchItems = generateItemEntities(input);

      if (batchItems.length !== 0){

        let itemPricesOrganized:CreateItemPriceInput[][] = [];
        let batchItemPrices:CreateItemPriceInput[] = [];

        let itemsOrganized:CreateSingleItemInput[][] = [];
        let batchItemsList:CreateSingleItemInput[] = [];
        

        batchItems.forEach((batch) => {
          itemPricesOrganized.push(batch.itemPrices);
          batchItemPrices = [...batchItemPrices, ...batch.itemPrices];
          itemsOrganized.push(batch.items);
          batchItemsList = [...batchItemsList, ...batch.items];
        });

        const priceResult = await queryRunner.manager.insert(ItemPrice, batchItemPrices);

        if (priceResult.raw.affectedRows === batchItemPrices.length){
          
          const itemResult = await queryRunner.manager.insert(Item, batchItemsList);

          if (itemResult.raw.affectedRows === batchItemsList.length){

            console.log('YAYYY');
            console.log(`PRICES: ${priceResult.identifiers}`)
            console.log(`ITEMS: ${itemResult.identifiers}`)
            await queryRunner.commitTransaction();

          }else{
            throw Error('failed to create all items');
          }

        }else{
          throw Error('failed to create all prices');
        }
      }

    }catch(e){
      await queryRunner.rollbackTransaction();
      console.log(e);
      return e;
    }finally{
      if (!queryRunner.isReleased) queryRunner.release();
    }

  }

  async createFake(merchantId:number, count:number): Promise<boolean> {

    for (let i = 0; i< count; i++){
      
      const sku = faker.internet.userName({firstName: 'item', lastName: faker.string.alpha()});
      const fakeItem = {
        sku,
        merchantSku: sku,
        description: faker.commerce.productDescription(),
        imageUrl: faker.image.url(),
        merchantId,
        name: faker.commerce.product(),
      }

      const resp = await this.itemRepo.insert(fakeItem);
      if (resp.raw.affectedRows === 1){
        this.itemPriceService.createFakePrice(sku);
      }
    }
    return true;
  }

  async paginateItemsById(itemPageInput:paginateItemsInput){

    let queryBuilder = this.itemRepo
    .createQueryBuilder('item')

    if (itemPageInput.merchantId !== undefined){
      queryBuilder = queryBuilder.where({merchantId: itemPageInput.merchantId})
    }

    const nextPaginator = buildPaginator({
      entity: Item,
      paginationKeys: ['sku'],
      query: {
        limit: itemPageInput.limit?? 10,
        order: itemPageInput.isAsc ? 'ASC' : 'DESC',
        beforeCursor: itemPageInput.beforeCursor,
        afterCursor: itemPageInput.afterCursor
      },
    })

    return await nextPaginator.paginate(queryBuilder);
    
  }


  findAll(): Promise<Item[]>{
    return this.itemRepo.find();
  }

  findAllInKeys(keys: readonly string[]) {
    return this.itemRepo.find({where: {sku: In(keys)}})
  }

  findOne(sku: string) {
    return this.itemRepo.findOne({where: {sku}})
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
