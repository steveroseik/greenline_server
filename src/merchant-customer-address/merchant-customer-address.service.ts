import { Injectable } from '@nestjs/common';
import { CreateMerchantCustomerAddressInput } from './dto/create-merchant-customer-address.input';
import { UpdateMerchantCustomerAddressInput } from './dto/update-merchant-customer-address.input';

@Injectable()
export class MerchantCustomerAddressService {
  create(createMerchantCustomerAddressInput: CreateMerchantCustomerAddressInput) {
    return 'This action adds a new merchantCustomerAddress';
  }

  findAll() {
    return `This action returns all merchantCustomerAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantCustomerAddress`;
  }

  update(id: number, updateMerchantCustomerAddressInput: UpdateMerchantCustomerAddressInput) {
    return `This action updates a #${id} merchantCustomerAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantCustomerAddress`;
  }
}
