import { Injectable } from '@nestjs/common';
import { UpdateItemInput } from './dto/update-item.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Like, Repository } from 'typeorm';
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
import { CreateItemPriceListInput } from 'src/item-price-list/dto/create-item-price-list.input';
import { SingleItemRefInput } from './dto/create-item-single-ref.input';
import { GenerateItemSku } from 'support/item-sku.generator';

var _ = require('lodash');

@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item) private readonly itemRepo:Repository<Item>,
    private itemPriceService:ItemPriceService,
    private dataSource:DataSource){}


  async createCompound(input: CreateMultipleItems[]) {

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

            const priceItemIds = priceResult.identifiers.map((identifier: any) => identifier.id);

            let itemLinks:CreateItemPriceListInput[] = [];

            let priceIndex = 0;

            for (let i = 0; i < batchItems.length ; i++){

              for (let j = 0; j < batchItems[i].itemPrices.length; j++){

                for (let k = 0; k < batchItems[i].items.length; k++){

                  itemLinks.push({
                    itemPriceId: priceItemIds[priceIndex],
                    itemSku: batchItems[i].items[k].sku
                  })
                }
                priceIndex++;
              }
            }
            
            const links = await queryRunner.manager.insert(ItemPriceList, itemLinks);

            if (links.raw.affectedRows === itemLinks.length){

              await queryRunner.commitTransaction();
              return true;
            }else{
              throw Error('failed to create all links');
            }
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

  async createSingles(input:SingleItemRefInput[]){

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try{

      let itemPrices:Map<number, CreateItemPriceInput[]> = new Map();
      let itemPricesList: CreateItemPriceInput[] = [];

      input.forEach((singleItem) => {

        if (singleItem.itemPrices !== undefined){
          itemPrices.set(singleItem.priceReference, singleItem.itemPrices);
          
          itemPricesList = [...itemPricesList, ...singleItem.itemPrices];

        }

        singleItem.sku = GenerateItemSku(singleItem.name, singleItem.merchantId, 
          singleItem.color, singleItem.colorHex, singleItem.size);

      })

      const priceResult = await queryRunner.manager
      .insert(ItemPrice, Array.from(itemPricesList))

      if (priceResult.raw.affectedRows === itemPricesList.length){

        const itemResult = await queryRunner.manager.insert(Item, Array.from(input))

        if (itemResult.raw.affectedRows === input.length){

          const priceItemIds = priceResult.identifiers.map((identifier) => (identifier.id));

          const itemKeys = Array.from(itemPrices.keys());

          let insertKeys: Map<number, number[]> = new Map();
          let insertIndex = 0;

          for (let i = 0; i < itemKeys.length ; i++){
            let listOfKeys:number[] = [];
            for (let j = 0; j < itemPrices.get(itemKeys[i]).length; j++){
              listOfKeys.push(priceItemIds[insertIndex]);
              insertIndex++;
            }
            insertKeys.set(itemKeys[i], listOfKeys);
          }

          let itemLinks:CreateItemPriceListInput[] = [];

          input.forEach((item) => {
            insertKeys.get(item.priceReference).forEach((key) => {
              itemLinks.push({
                itemSku: item.sku,
                itemPriceId: key
              })
            })
          })

          const linksResult = await queryRunner.manager.insert(ItemPriceList, itemLinks);
          if (linksResult.raw.affectedRows === itemLinks.length){

            await queryRunner.commitTransaction();
            return true;
          }else{
             throw Error('failed to create all links');
          }
        }else{
           throw Error('failed to create all items');
        }
      }else{
         throw Error('failed to create all prices');
      }

    }catch (e){
      console.log(e);
      await queryRunner.rollbackTransaction();
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

  async paginateItems(input:paginateItemsInput){

    let queryBuilder = this.itemRepo
    .createQueryBuilder('item')

    let whereSet = false;

    if (input.merchantId !== undefined){
      whereSet = true;
      queryBuilder = queryBuilder.where({merchantId: input.merchantId})
    }

    if (input.name.length > 0){
      if (whereSet){
        queryBuilder = queryBuilder.andWhere({name: Like(`%${input.name}%`)})
      }else{
        whereSet = true;
        queryBuilder = queryBuilder.where({name: Like(`%${input.name}%`)})
      }
    }

    if (input.sku.length > 0){
      if (whereSet){
        queryBuilder = queryBuilder.andWhere({merchantSku: Like(`%${input.sku}%`)})
      }else{
        whereSet = true;
        queryBuilder = queryBuilder.where({merchantSku: Like(`%${input.sku}%`)})
      }
    }



    const nextPaginator = buildPaginator({
      entity: Item,
      paginationKeys: ['createdAt'],
      query: {
        limit: input.limit?? 10,
        order: input.isAsc ? 'ASC' : 'DESC',
        beforeCursor: input.beforeCursor,
        afterCursor: input.afterCursor
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
