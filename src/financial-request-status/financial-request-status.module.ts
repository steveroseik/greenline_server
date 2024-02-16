import { Module } from '@nestjs/common';
import { FinancialRequestStatusService } from './financial-request-status.service';
import { FinancialRequestStatusResolver } from './financial-request-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialRequestStatus } from './entities/financial-request-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialRequestStatus])],
  providers: [FinancialRequestStatusResolver, FinancialRequestStatusService],
  exports: [FinancialRequestStatusService]
})
export class FinancialRequestStatusModule {}
