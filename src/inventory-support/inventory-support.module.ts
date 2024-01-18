import { Module } from '@nestjs/common';
import { InventorySupportService } from './inventory-support.service';
import { InventorySupportResolver } from './inventory-support.resolver';

@Module({
  providers: [InventorySupportResolver, InventorySupportService],
})
export class InventorySupportModule {}
