import { Injectable } from '@nestjs/common';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { UpdateInventoryInput } from './dto/update-inventory.input';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryService {

  constructor(@InjectRepository(Inventory) private readonly inventoryRepo:Repository<Inventory>){}

  create(createInventoryInput: CreateInventoryInput) {
    return 'This action adds a new inventory';
  }

  async createFake(){ 

    const fakeInventory = {
      name: faker.company.name(),
      zoneId: 1,
      location: {long: 0, lat: 0},
      module: 1,
      rentType: 1
    }

    // const resp = await this.inventoryRepo.insert(fakeInventory);


    return false//resp.raw.affectedRows === 1;
    
  }

  findAll() {
    return this.inventoryRepo.createQueryBuilder("Inventory").getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryInput: UpdateInventoryInput) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
