import { Injectable } from '@nestjs/common';
import { CreateInventorySupportInput } from './dto/create-inventory-support.input';
import { UpdateInventorySupportInput } from './dto/update-inventory-support.input';

@Injectable()
export class InventorySupportService {
  create(createInventorySupportInput: CreateInventorySupportInput) {
    return 'This action adds a new inventorySupport';
  }

  findAll() {
    return `This action returns all inventorySupport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventorySupport`;
  }

  update(id: number, updateInventorySupportInput: UpdateInventorySupportInput) {
    return `This action updates a #${id} inventorySupport`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventorySupport`;
  }
}
