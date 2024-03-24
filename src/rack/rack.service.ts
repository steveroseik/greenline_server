import { Injectable } from '@nestjs/common';
import { CreateRackInput } from './dto/create-rack.input';
import { UpdateRackInput } from './dto/update-rack.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Rack } from './entities/rack.entity';
import { In, QueryRunner, Repository } from 'typeorm';
import { BallotService } from 'src/ballot/ballot.service';
import { CreateInventoryInput } from 'src/inventory/dto/create-inventory.input';
import { numberToLetters } from 'support/numberToLetter.generator';
import { PaginateRacksInput } from './dto/paginate-racks.input';
import { buildPaginator } from 'typeorm-cursor-pagination';

@Injectable()
export class RackService {

  constructor(@InjectRepository(Rack) private readonly rackRepo:Repository<Rack>,
  private ballotService:BallotService){}


  async createFake(inventoryId:number){

    const racks = ['A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J'];

    for (let i = 0; i< racks.length; i++){
      const rackInfo = {
        inventoryId,
        name: racks[i],
        levels: 3,
      }
      const result = await this.rackRepo.insert(rackInfo);
      console.log(`created Rack ${racks[i]}`);
      await this.ballotService.createFake(inventoryId, result.raw['insertId'])
    }
    
  }


  async createFromInventory(inventoryId:number, 
    queryRunner:QueryRunner,input: CreateInventoryInput): Promise<boolean> {

      let success:boolean = true;
      for (let i = 1; i <= input.numberOfRacks; i++){

        const result = await queryRunner.manager.insert(Rack, {
          name: numberToLetters(i),
          inventoryId,
          levels: input.rackLevel,
        })

        if (result.raw.affectedRows === 1){
          if (input.ballotPerRack > 0){
            const success = await this.ballotService.createFromRack(result.raw.insertId, queryRunner, input);
            if (!success) break;
          }
        }else{
          success = false;
          break;
        }
      }

      return success;
    
  }


  paginateRacks(input:PaginateRacksInput){

    let queryBuilder = this.rackRepo.createQueryBuilder();

    if (input.invetoryIds.length > 0){

      queryBuilder = queryBuilder.where({inventoryId: In(input.invetoryIds)});
    }

    const paginator = buildPaginator({
      entity: Rack,
      paginationKeys: ['createdAt'],
      query: {
        limit: input.limit,
        order: input.isAsc ? 'ASC' : "DESC",
        afterCursor: input.afterCursor,
        beforeCursor: input.beforeCursor,
        
      }
    })

    return paginator.paginate(queryBuilder);

  }

  findAllInInventories(inventoryIds: readonly number[]){

    return this.rackRepo.find({where: {inventoryId: In(inventoryIds)}})
  }

  findAllInInventory(inventoryId:number){
    return this.rackRepo.find({where: {inventoryId}})
  }

  update(id: number, updateRackInput: UpdateRackInput) {
    return `This action updates a #${id} rack`;
  }

  remove(id: number) {
    return `This action removes a #${id} rack`;
  }
}
