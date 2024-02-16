import { Module } from '@nestjs/common';
import { FinancialAccountService } from './financial-account.service';
import { FinancialAccountResolver } from './financial-account.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialAccount } from './entities/financial-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialAccount])],
  providers: [FinancialAccountResolver, FinancialAccountService],
  exports: [FinancialAccountService]
})
export class FinancialAccountModule {}
