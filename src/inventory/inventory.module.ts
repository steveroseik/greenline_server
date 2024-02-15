import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryResolver } from './inventory.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { ItemInBoxModule } from 'src/item-in-box/item-in-box.module';
import { RackModule } from 'src/rack/rack.module';
import { InventoryPricesModule } from 'src/inventory-prices/inventory-price.module';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory]), ItemInBoxModule, RackModule, InventoryPricesModule],
  providers: [InventoryResolver, InventoryService],
})
export class InventoryModule {}
