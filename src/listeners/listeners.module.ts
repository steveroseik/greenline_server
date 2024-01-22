import { Module } from '@nestjs/common';
import { ListenersService } from './listeners.service';
import { ListenersResolver } from './listeners.resolver';

@Module({
  providers: [ListenersResolver, ListenersService],
})
export class ListenersModule {}
