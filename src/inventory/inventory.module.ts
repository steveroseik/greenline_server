import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryResolver } from './inventory.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { ItemInBoxModule } from 'src/item-in-box/item-in-box.module';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory]), ItemInBoxModule],
  providers: [InventoryResolver, InventoryService],
})
export class InventoryModule {}
