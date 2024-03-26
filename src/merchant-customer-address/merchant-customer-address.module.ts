import { Module } from '@nestjs/common';
import { MerchantCustomerAddressService } from './merchant-customer-address.service';
import { MerchantCustomerAddressResolver } from './merchant-customer-address.resolver';

@Module({
  providers: [MerchantCustomerAddressResolver, MerchantCustomerAddressService],
})
export class MerchantCustomerAddressModule {}
