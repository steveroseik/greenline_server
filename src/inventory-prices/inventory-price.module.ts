import { Module } from '@nestjs/common';
import { InventoryPricesService } from './inventory-price.service';
import { InventoryPricesResolver } from './inventory-price.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryPrice } from './entities/inventory-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryPrice])],
  providers: [InventoryPricesResolver, InventoryPricesService],
  exports: [InventoryPricesService]
})
export class InventoryPricesModule {}
