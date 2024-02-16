import { Module } from '@nestjs/common';
import { FinancialTransactionService } from './financial-transaction.service';
import { FinancialTransactionResolver } from './financial-transaction.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialTransaction } from './entities/financial-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialTransaction])],
  providers: [FinancialTransactionResolver, FinancialTransactionService],
  exports: [FinancialTransactionService]
})
export class FinancialTransactionModule {}
