import { Injectable } from '@nestjs/common';
import { CreateFinancialAccountInput } from './dto/create-financial-account.input';
import { UpdateFinancialAccountInput } from './dto/update-financial-account.input';

@Injectable()
export class FinancialAccountService {
  create(createFinancialAccountInput: CreateFinancialAccountInput) {
    return 'This action adds a new financialAccount';
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
