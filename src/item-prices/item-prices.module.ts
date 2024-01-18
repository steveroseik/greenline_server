import { Module } from '@nestjs/common';
import { ItemPricesService } from './item-prices.service';
import { ItemPricesResolver } from './item-prices.resolver';

@Module({
  providers: [ItemPricesResolver, ItemPricesService],
})
export class ItemPricesModule {}
