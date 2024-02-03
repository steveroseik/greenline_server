import { Injectable } from '@nestjs/common';
import { CreateRackInput } from './dto/create-rack.input';
import { UpdateRackInput } from './dto/update-rack.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Rack } from './entities/rack.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class RackService {

  constructor(@InjectRepository(Rack) private readonly rackRepo:Repository<Rack>){}


  create(createRackInput: CreateRackInput) {
    return 'This action adds a new rack';
  }

  findAll() {
    return `This action returns all rack`;
  }

  findAllInInventories(inventoryIds: readonly number[]){

    return this.rackRepo.find({where: {inventoryId: In(inventoryIds)}})
  }

  findAllInInventory(inventoryId:number){
    return this.rackRepo.find({where: {inventoryId}})
  }

  findOne(id: number) {
    return `This action returns a #${id} rack`;
  }

  update(id: number, updateRackInput: UpdateRackInput) {
    return `This action updates a #${id} rack`;
  }

  remove(id: number) {
    return `This action removes a #${id} rack`;
  }
}
