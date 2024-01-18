import { Injectable } from '@nestjs/common';
import { CreateInventoryPriceInput } from './dto/create-inventory-price.input';
import { UpdateInventoryPriceInput } from './dto/update-inventory-price.input';

@Injectable()
export class InventoryPricesService {
  create(createInventoryPriceInput: CreateInventoryPriceInput) {
    return 'This action adds a new inventoryPrice';
  }

  findAll() {
    return `This action returns all inventoryPrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryPrice`;
  }

  update(id: number, updateInventoryPriceInput: UpdateInventoryPriceInput) {
    return `This action updates a #${id} inventoryPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryPrice`;
  }
}
