import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantResolver } from './merchant.resolver';

@Module({
  providers: [MerchantResolver, MerchantService],
})
export class MerchantModule {}
