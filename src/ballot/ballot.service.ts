import { Injectable } from '@nestjs/common';
import { CreateBallotInput } from './dto/create-ballot.input';
import { UpdateBallotInput } from './dto/update-ballot.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Ballot } from './entities/ballot.entity';
import { QueryRunner, Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { ItemService } from 'src/item/item.service';
import { BoxService } from 'src/box/box.service';
import { CreateInventoryInput } from 'src/inventory/dto/create-inventory.input';
import { numberToLetters } from 'support/numberToLetter.generator';

@Injectable()
export class BallotService {

  constructor(@InjectRepository(Ballot) private readonly ballotRepo:Repository<Ballot>,
  private itemService:ItemService, private boxService:BoxService){}


  async createFake(inventoryId: number, rackId:number){

    const items = await this.itemService.findAll();

    for (let i = 0; i< 3; i++){
      const ballotInfo = {
        rackId,
        name: faker.internet.userName({firstName: 'ballot', lastName: faker.string.alpha()}),
        level: i+1
      }
      const result = await this.ballotRepo.insert(ballotInfo);
      console.log(`created Ballot at level ${i}`);
      const rand = Math.floor(Math.random() * (items.length - 2))
      await this.boxService.createFake(inventoryId, result.raw['insertId'], items.slice(rand, rand+4));
      
    }

  }

  async createFromRack(rackId:number, queryRunner:QueryRunner, input:CreateInventoryInput): Promise<boolean>{
    
    let success:boolean = true;
    for (let i=1; i<= input.ballotPerRack; i++){
      const result = await queryRunner.manager.insert(Ballot, {
        rackId, 
        name: numberToLetters(i),
        level: input.rackLevel === 1 ? 1 : (i % input.rackLevel) + 1,
      })

      if (result.raw.affectedRows === 1){
        if (input.boxPerBallot > 0){
          success = await this.boxService.createFromBallot(result.raw.insertId, queryRunner, input);
          if (!success) break;
        }
      }else{
        success = false;
        break;
      }
    }

    return success;
  }

  create(createBallotInput: CreateBallotInput) {
    return 'This action adds a new ballot';
  }

  findAll() {
    return `This action returns all ballot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ballot`;
  }

  update(id: number, updateBallotInput: UpdateBallotInput) {
    return `This action updates a #${id} ballot`;
  }

  remove(id: number) {
    return `This action removes a #${id} ballot`;
  }
}
