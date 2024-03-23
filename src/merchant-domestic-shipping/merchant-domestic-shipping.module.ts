import { Module } from '@nestjs/common';
import { MerchantDomesticShippingService } from './merchant-domestic-shipping.service';
import { MerchantDomesticShippingResolver } from './merchant-domestic-shipping.resolver';

@Module({
  providers: [MerchantDomesticShippingResolver, MerchantDomesticShippingService],
})
export class MerchantDomesticShippingModule {}
