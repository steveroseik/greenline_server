import { Module } from '@nestjs/common';
import { InventoryPricesService } from './inventory-prices.service';
import { InventoryPricesResolver } from './inventory-prices.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryPrices } from './entities/inventory-prices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryPrices])],
  providers: [InventoryPricesResolver, InventoryPricesService],
  exports: [InventoryPricesService]
})
export class InventoryPricesModule {}
