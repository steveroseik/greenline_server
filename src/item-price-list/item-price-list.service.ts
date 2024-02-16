import { Injectable } from '@nestjs/common';
import { CreateItemPriceListInput } from './dto/create-item-price-list.input';
import { UpdateItemPriceListInput } from './dto/update-item-price-list.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPriceList } from './entities/item-price-list.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ItemPriceListService {


  constructor(@InjectRepository(ItemPriceList) private repo:Repository<ItemPriceList>){}



  create(createItemPriceListInput: CreateItemPriceListInput) {
    return 'This action adds a new itemPriceList';
  }

  async findItemPrices(keys: readonly string[]){

    return this.repo.find({
      where: {
        itemSku: In(keys),
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} itemPriceList`;
  }

  update(id: number, updateItemPriceListInput: UpdateItemPriceListInput) {
    return `This action updates a #${id} itemPriceList`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemPriceList`;
  }
}
