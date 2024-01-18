import { Module } from '@nestjs/common';
import { InventoryPricesService } from './inventory-prices.service';
import { InventoryPricesResolver } from './inventory-prices.resolver';

@Module({
  providers: [InventoryPricesResolver, InventoryPricesService],
})
export class InventoryPricesModule {}
