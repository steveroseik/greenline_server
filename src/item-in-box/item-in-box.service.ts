import { Injectable } from '@nestjs/common';
import { CreateItemInBoxInput } from './dto/create-item-in-box.input';
import { UpdateItemInBoxInput } from './dto/update-item-in-box.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemInBox } from './entities/item-in-box.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ItemInBoxService {

  constructor(@InjectRepository(ItemInBox) private readonly itemInBoxRepo:Repository<ItemInBox>){}

  create(createItemInBoxInput: CreateItemInBoxInput) {
    return 'This action adds a new itemInBox';
  }


  async findFromInventory(inventoryId:number): Promise<ItemInBox[]>{
    return await this.itemInBoxRepo.find({where: {inventoryId}})
  }


  async findFromInventories(inventoryIds: readonly number[]): Promise<ItemInBox[]>{
    return await this.itemInBoxRepo.find({where: {inventoryId: In(inventoryIds)}})
  }

  findItemOccurrence(itemSku:string){
    return this.itemInBoxRepo.countBy({itemSku})
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
