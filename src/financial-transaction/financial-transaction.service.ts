import { Injectable } from '@nestjs/common';
import { CreateFinancialTransactionInput } from './dto/create-financial-transaction.input';
import { UpdateFinancialTransactionInput } from './dto/update-financial-transaction.input';

@Injectable()
export class FinancialTransactionService {
  create(createFinancialTransactionInput: CreateFinancialTransactionInput) {
    return 'This action adds a new financialTransaction';
  }

  findAll() {
    return `This action returns all financialTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialTransaction`;
  }

  update(id: number, updateFinancialTransactionInput: UpdateFinancialTransactionInput) {
    return `This action updates a #${id} financialTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialTransaction`;
  }
}
