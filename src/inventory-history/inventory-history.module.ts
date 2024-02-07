import { Module } from '@nestjs/common';
import { InventoryHistoryService } from './inventory-history.service';
import { InventoryHistoryResolver } from './inventory-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryHistory } from './entities/inventory-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryHistory])],
  providers: [InventoryHistoryResolver, InventoryHistoryService],
  exports: [InventoryHistoryService]
})
export class InventoryHistoryModule {}
