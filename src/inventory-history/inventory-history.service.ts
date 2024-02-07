import { Injectable } from '@nestjs/common';
import { CreateInventoryHistoryInput } from './dto/create-inventory-history.input';
import { UpdateInventoryHistoryInput } from './dto/update-inventory-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryHistory } from './entities/inventory-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryHistoryService {


  constructor(@InjectRepository(InventoryHistory) private readonly historyRepo:Repository<InventoryHistory>){}

  create(createInventoryHistoryInput: CreateInventoryHistoryInput) {
    return 'This action adds a new inventoryHistory';
  }

  async createHistory(input:CreateInventoryHistoryInput){

    const result = await this.historyRepo.insert(input);

    return result.raw.affectedRows === 1;
  }

  findAll() {
    return `This action returns all inventoryHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryHistory`;
  }

  update(id: number, updateInventoryHistoryInput: UpdateInventoryHistoryInput) {
    return `This action updates a #${id} inventoryHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryHistory`;
  }
}
