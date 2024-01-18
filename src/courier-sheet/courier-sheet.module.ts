import { Module } from '@nestjs/common';
import { CourierSheetService } from './courier-sheet.service';
import { CourierSheetResolver } from './courier-sheet.resolver';

@Module({
  providers: [CourierSheetResolver, CourierSheetService],
})
export class CourierSheetModule {}
