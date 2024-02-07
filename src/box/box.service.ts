import { Injectable } from '@nestjs/common';
import { CreateBoxInput } from './dto/create-box.input';
import { UpdateBoxInput } from './dto/update-box.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Box } from './entities/box.entity';
import { QueryRunner, Repository } from 'typeorm';
import { Item } from 'src/item/entities/item.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { faker } from '@faker-js/faker/locale/af_ZA';
import { CreateInventoryInput } from 'src/inventory/dto/create-inventory.input';
import { numberToLetters } from 'support/numberToLetter.generator';

@Injectable()
export class BoxService {

  constructor(@InjectRepository(Box) private readonly boxRepo:Repository<Box>,
  private itemInBoxService:ItemInBoxService){}


  create(createBoxInput: CreateBoxInput) {
    return 'This action adds a new box';
  }

  async createFromBallot(ballotId:number, queryRunner:QueryRunner, input:CreateInventoryInput): Promise<boolean>{

    for (let i = 1; i <= input.boxPerBallot; i++){

      const result = await queryRunner.manager.insert(Box, {
        ballotId,
        name: numberToLetters(i),
      })
      if (result.raw.affectedRows !== 1) return false;
    }

    return true;
  }

  async createFake(inventoryId:number, ballotId:number, items:Item[]){

    for (let i=0; i< 3; i++){

      const boxInfo = {
        ballotId,
        name: faker.internet.userName({firstName: 'box', lastName: faker.string.alpha()})
      }
      const result = await this.boxRepo.insert(boxInfo);
      console.log(`created Box:id -> ${result.raw['insertId']}`);

      for (let i = 0; i < items.length; i++){
        const itemInBoxInfo = {
          boxId: result.raw['insertId'],
          inventoryId,
          itemSku: items[i].sku,
          count: Math.floor(Math.random() * 100) + 10,
          minCount: 10
        }
        await this.itemInBoxService.createFake(itemInBoxInfo)
        console.log(`created Item Bundle: ${items[i].sku}`);
      }
    }
  }

  findAll() {
    return `This action returns all box`;
  }

  findOne(id: number) {
    return `This action returns a #${id} box`;
  }

  update(id: number, updateBoxInput: UpdateBoxInput) {
    return `This action updates a #${id} box`;
  }

  remove(id: number) {
    return `This action removes a #${id} box`;
  }
}
