import { Injectable } from '@nestjs/common';
import { CreateFinancialAccountInput } from './dto/create-financial-account.input';
import { UpdateFinancialAccountInput } from './dto/update-financial-account.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialAccount } from './entities/financial-account.entity';
import { Repository } from 'typeorm';
import { FinancialAccountType } from 'support/enums';

@Injectable()
export class FinancialAccountService {

  constructor(@InjectRepository(FinancialAccount) private repo:Repository<FinancialAccount>){}


  async create(input: CreateFinancialAccountInput): Promise<number | null>{

    if (input.userId === null && input.merchantId === null ) throw Error('invalid account holder!')
    
    const result = await this.repo.insert(input);

    if (result.raw.affectedRows === 1) return result.raw.insertId;

    throw Error('failed to register account!')
  }

  async createForMerchant(merchantId: number, name: string){

    const result = await this.repo.insert({
      merchantId,
      name: `${name}'s Financial Account`,
      type: FinancialAccountType.merchant,
    })

    return result.raw.affectedRows === 1
  }

  findAll() {
    return `This action returns all financialAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialAccount`;
  }

  update(id: number, updateFinancialAccountInput: UpdateFinancialAccountInput) {
    return `This action updates a #${id} financialAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialAccount`;
  }
}
