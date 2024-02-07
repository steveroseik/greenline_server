import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { faker } from '@faker-js/faker';
import { ItemPriceService } from 'src/item-price/item-price.service';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { PaginationInput } from 'support/pagination.input';

@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item) private readonly itemRepo:Repository<Item>,
    private itemPriceService:ItemPriceService){}


  create(createItemInput: CreateItemInput) {
    return 'This action adds a new item';
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

  async paginateItemsById(itemPageInput:PaginationInput){

    let queryBuilder = this.itemRepo
    .createQueryBuilder('item')


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
