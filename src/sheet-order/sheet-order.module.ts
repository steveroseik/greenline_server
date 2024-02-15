import { Module } from '@nestjs/common';
import { SheetOrderService } from './sheet-order.service';
import { SheetOrderResolver } from './sheet-order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetOrder } from './entities/sheet-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SheetOrder])],
  providers: [SheetOrderResolver, SheetOrderService],
  exports: [SheetOrderService]
})
export class SheetOrderModule {}
