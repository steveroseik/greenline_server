import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantResolver } from './merchant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './entities/merchant.entity';
import { FinancialAccountModule } from 'src/financial-account/financial-account.module';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant]), FinancialAccountModule],
  providers: [MerchantResolver, MerchantService],
})
export class MerchantModule {}
