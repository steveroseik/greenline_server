import { Injectable } from '@nestjs/common';
import { CreateMerchantCustomerInput } from './dto/create-merchant-customer.input';
import { UpdateMerchantCustomerInput } from './dto/update-merchant-customer.input';

@Injectable()
export class MerchantCustomerService {
  create(createMerchantCustomerInput: CreateMerchantCustomerInput) {
    return 'This action adds a new merchantCustomer';
  }

  findAll() {
    return `This action returns all merchantCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantCustomer`;
  }

  update(id: number, updateMerchantCustomerInput: UpdateMerchantCustomerInput) {
    return `This action updates a #${id} merchantCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantCustomer`;
  }
}
