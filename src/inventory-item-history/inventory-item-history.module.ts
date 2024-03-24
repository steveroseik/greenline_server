import { Module } from '@nestjs/common';
import { InventoryItemHistoryService } from './inventory-item-history.service';
import { InventoryItemHistoryResolver } from './inventory-item-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryItemHistory } from './entities/inventory-item-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryItemHistory])],
  providers: [InventoryItemHistoryResolver, InventoryItemHistoryService],
  exports: [InventoryItemHistoryService]
})
export class InventoryItemHistoryModule {}
