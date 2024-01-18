import { Module } from '@nestjs/common';
import { ItemInBoxService } from './item-in-box.service';
import { ItemInBoxResolver } from './item-in-box.resolver';

@Module({
  providers: [ItemInBoxResolver, ItemInBoxService],
})
export class ItemInBoxModule {}
