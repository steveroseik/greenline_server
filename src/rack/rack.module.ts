import { Module } from '@nestjs/common';
import { RackService } from './rack.service';
import { RackResolver } from './rack.resolver';

@Module({
  providers: [RackResolver, RackService],
})
export class RackModule {}
