import { Injectable } from '@nestjs/common';
import { CreateMerchantDomesticShippingInput } from './dto/create-merchant-domestic-shipping.input';
import { UpdateMerchantDomesticShippingInput } from './dto/update-merchant-domestic-shipping.input';

@Injectable()
export class MerchantDomesticShippingService {
  create(createMerchantDomesticShippingInput: CreateMerchantDomesticShippingInput) {
    return 'This action adds a new merchantDomesticShipping';
  }

  findAll() {
    return `This action returns all merchantDomesticShipping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantDomesticShipping`;
  }

  update(id: number, updateMerchantDomesticShippingInput: UpdateMerchantDomesticShippingInput) {
    return `This action updates a #${id} merchantDomesticShipping`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantDomesticShipping`;
  }
}
