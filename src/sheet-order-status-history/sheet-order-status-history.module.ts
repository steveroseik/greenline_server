import { Module } from '@nestjs/common';
import { SheetOrderStatusHistoryService } from './sheet-order-status-history.service';
import { SheetOrderStatusHistoryResolver } from './sheet-order-status-history.resolver';

@Module({
  providers: [SheetOrderStatusHistoryResolver, SheetOrderStatusHistoryService],
})
export class SheetOrderStatusHistoryModule {}
