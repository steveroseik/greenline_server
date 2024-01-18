import { Injectable } from '@nestjs/common';
import { CreateFinancialRequestStatusInput } from './dto/create-financial-request-status.input';
import { UpdateFinancialRequestStatusInput } from './dto/update-financial-request-status.input';

@Injectable()
export class FinancialRequestStatusService {
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
