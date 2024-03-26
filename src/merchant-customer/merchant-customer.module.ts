import { Module } from '@nestjs/common';
import { MerchantCustomerService } from './merchant-customer.service';
import { MerchantCustomerResolver } from './merchant-customer.resolver';

@Module({
  providers: [MerchantCustomerResolver, MerchantCustomerService],
})
export class MerchantCustomerModule {}
