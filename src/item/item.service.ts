import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
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

@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item) private readonly itemRepo:Repository<Item>,
    private itemPriceService:ItemPriceService,
    private dataSource:DataSource){}


  async create({sku, merchantSku, merchantId, name, size, color, description, imageUrl, itemPrices }: CreateItemInput) {

    const queryRunner = this.dataSource.createQueryRunner();
    
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const result = await queryRunner.manager.insert(Item, {
      sku,
      merchantSku,
      merchantId,
      name,
      size,
      color,
      description, 
      imageUrl
    })
    if (result.raw.affectedRows === 1){
      
      const items = itemPrices.map((item) => ({...item, itemSku: sku}))

      const res = await queryRunner.manager.insert(ItemInBox, items)
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
        limit: itemPageInput.limit,
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
