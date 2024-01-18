import { Injectable } from '@nestjs/common';
import { CreateItemInBoxInput } from './dto/create-item-in-box.input';
import { UpdateItemInBoxInput } from './dto/update-item-in-box.input';

@Injectable()
export class ItemInBoxService {
  create(createItemInBoxInput: CreateItemInBoxInput) {
    return 'This action adds a new itemInBox';
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
