import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantResolver } from './merchant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './entities/merchant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  providers: [MerchantResolver, MerchantService],
})
export class MerchantModule {}
