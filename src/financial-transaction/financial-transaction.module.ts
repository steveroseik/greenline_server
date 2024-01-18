import { Module } from '@nestjs/common';
import { FinancialTransactionService } from './financial-transaction.service';
import { FinancialTransactionResolver } from './financial-transaction.resolver';

@Module({
  providers: [FinancialTransactionResolver, FinancialTransactionService],
})
export class FinancialTransactionModule {}
