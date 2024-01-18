import { Module } from '@nestjs/common';
import { RequestStatusHistoryService } from './request-status-history.service';
import { RequestStatusHistoryResolver } from './request-status-history.resolver';

@Module({
  providers: [RequestStatusHistoryResolver, RequestStatusHistoryService],
})
export class RequestStatusHistoryModule {}
