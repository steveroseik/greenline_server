import { Module } from '@nestjs/common';
import { CourierSheetService } from './courier-sheet.service';
import { CourierSheetResolver } from './courier-sheet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourierSheet } from './entities/courier-sheet.entity';
import { SheetOrderModule } from 'src/sheet-order/sheet-order.module';

@Module({
  imports: [TypeOrmModule.forFeature([CourierSheet]), SheetOrderModule],
  providers: [CourierSheetResolver, CourierSheetService],
  exports: [CourierSheetService]
})
export class CourierSheetModule {}
