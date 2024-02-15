import { Injectable } from '@nestjs/common';
import { CreateItemPriceInput } from './dto/create-item-price.input';
import { UpdateItemPriceInput } from './dto/update-item-price.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPrice } from './entities/item-price.entity';
import { In, Repository } from 'typeorm';
import { faker } from '@faker-js/faker/locale/af_ZA';

@Injectable()
export class ItemPriceService {

  constructor(@InjectRepository(ItemPrice) private readonly itemPriceRepo:Repository<ItemPrice>){}


  create(createItemPriceInput: CreateItemPriceInput) {
    return 'This action adds a new itemPrice';
  }

  async createFakePrice(sku:string): Promise<boolean>{

    const fakePrice = {
      itemSku: sku,
      currency: 'EGP',
      price: Number.parseFloat(faker.commerce.price())
    }
    
    const resp = await this.itemPriceRepo.insert(fakePrice);

    return resp.raw.affectedRows === 1
  }

  async findItemPrices(keys: readonly {key: string, currency: string}[]){

    let itemKeys = keys.map((key) => key.key);
    itemKeys = [...new Set(itemKeys)]

    return this.itemPriceRepo.find({
      where: {
        itemSku: In(itemKeys), 
        currency: keys[0].currency
      }
    })
  }

  findAll() {
    return `This action returns all itemPrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemPrice`;
  }

  update(id: number, updateItemPriceInput: UpdateItemPriceInput) {
    return `This action updates a #${id} itemPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemPrice`;
  }
}
