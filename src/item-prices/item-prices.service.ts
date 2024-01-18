import { Injectable } from '@nestjs/common';
import { CreateItemPriceInput } from './dto/create-item-price.input';
import { UpdateItemPriceInput } from './dto/update-item-price.input';

@Injectable()
export class ItemPricesService {
  create(createItemPriceInput: CreateItemPriceInput) {
    return 'This action adds a new itemPrice';
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
