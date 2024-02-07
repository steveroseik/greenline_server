import {Injectable } from '@nestjs/common';
import { CreateMerchantInput } from './dto/create-merchant.input';
import { UpdateMerchantInput } from './dto/update-merchant.input';
import { faker } from '@faker-js/faker';
import { Merchant } from './entities/merchant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MerchantService {
  

  constructor(@InjectRepository(Merchant) private readonly merchantRepo:Repository<Merchant>){}

  create(createMerchantInput: CreateMerchantInput) {
    return 'This action adds a new merchant';
  }

  async createFakeMerchant(count:number): Promise<boolean>{

    for (let i =0; i<count;i++){
      const merch:CreateMerchantInput = {
        name: faker.internet.displayName(),
        includesVat: Math.random() > 0.5 ? true : false
      }
      const resp = await this.merchantRepo.insert(merch)
    }
    return true;
  }

  findAll() {
    return `This action returns all merchant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchant`;
  }

  update(id: number, updateMerchantInput: UpdateMerchantInput) {
    return `This action updates a #${id} merchant`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchant`;
  }
}
