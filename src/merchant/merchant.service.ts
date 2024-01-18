import { Injectable } from '@nestjs/common';
import { CreateMerchantInput } from './dto/create-merchant.input';
import { UpdateMerchantInput } from './dto/update-merchant.input';

@Injectable()
export class MerchantService {
  create(createMerchantInput: CreateMerchantInput) {
    return 'This action adds a new merchant';
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
