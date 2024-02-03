import { Module } from '@nestjs/common';
import { HubService } from './hub.service';
import { HubResolver } from './hub.resolver';

@Module({
  providers: [HubResolver, HubService],
})
export class HubModule {}
