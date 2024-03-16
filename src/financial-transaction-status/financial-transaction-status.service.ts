import { Injectable } from '@nestjs/common';
import { CreateFinancialRequestStatusInput } from './dto/create-financial-transaction-status.input';
import { UpdateFinancialRequestStatusInput } from './dto/update-financial-transaction-status.input';

@Injectable()
export class FinancialTransactionStatusService {
  create(createFinancialRequestStatusInput: CreateFinancialRequestStatusInput) {
    return 'This action adds a new financialRequestStatus';
  }

  findAll() {
    return `This action returns all financialRequestStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialRequestStatus`;
  }

  update(id: number, updateFinancialRequestStatusInput: UpdateFinancialRequestStatusInput) {
    return `This action updates a #${id} financialRequestStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialRequestStatus`;
  }
}
