import { Module } from '@nestjs/common';
import { FinancialAccountService } from './financial-account.service';
import { FinancialAccountResolver } from './financial-account.resolver';

@Module({
  providers: [FinancialAccountResolver, FinancialAccountService],
})
export class FinancialAccountModule {}
