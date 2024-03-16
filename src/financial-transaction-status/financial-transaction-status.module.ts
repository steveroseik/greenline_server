import { Module } from '@nestjs/common';
import { FinancialTransactionStatusService } from './financial-transaction-status.service';
import { FinancialTransactionStatusResolver } from './financial-transaction-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialTransactionStatus } from './entities/financial-transaction-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialTransactionStatus])],
  providers: [FinancialTransactionStatusResolver, FinancialTransactionStatusService],
  exports: [FinancialTransactionStatusService]
})
export class FinancialTransactionStatusModule {}
