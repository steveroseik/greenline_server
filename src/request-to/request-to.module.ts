import { Module } from '@nestjs/common';
import { RequestToService } from './request-to.service';
import { RequestToResolver } from './request-to.resolver';

@Module({
  providers: [RequestToResolver, RequestToService],
})
export class RequestToModule {}
