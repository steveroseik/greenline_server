import { Module } from '@nestjs/common';
import { FinancialRequestStatusService } from './financial-request-status.service';
import { FinancialRequestStatusResolver } from './financial-request-status.resolver';

@Module({
  providers: [FinancialRequestStatusResolver, FinancialRequestStatusService],
})
export class FinancialRequestStatusModule {}
