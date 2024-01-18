import { Module } from '@nestjs/common';
import { SheetOrderService } from './sheet-order.service';
import { SheetOrderResolver } from './sheet-order.resolver';

@Module({
  providers: [SheetOrderResolver, SheetOrderService],
})
export class SheetOrderModule {}
