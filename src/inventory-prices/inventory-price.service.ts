import { Injectable } from '@nestjs/common';
import { CreateInventoryPriceInput } from './dto/create-inventory-price.input';
import { UpdateInventoryPriceInput } from './dto/update-inventory-price.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryPrice } from './entities/inventory-price.entity';
import { QueryRunner, Repository } from 'typeorm';
import { AddInventoryPriceInput } from './dto/add-inventory-price.input';

@Injectable()
export class InventoryPricesService {


  constructor(@InjectRepository(InventoryPrice) private readonly inventoryPricesRepo:Repository<InventoryPrice>){}



  create(createInventoryPriceInput: CreateInventoryPriceInput) {
    return 'This action adds a new inventoryPrice';
  }

  async createFromInventory(inventoryId: number, 
    queryRunner:QueryRunner, input:AddInventoryPriceInput[]): Promise<boolean>{
    
    let success:boolean = true;
    for (let i = 0; i < input.length; i++){
       const res = await queryRunner.manager.insert(InventoryPrice, {
        inventoryId,
        ...input[i]
      });
      if (res.raw.affectedRows !== 1){
        success = false;
        break;
      }
    }
    return success;
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
