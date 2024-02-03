import { Module, forwardRef } from '@nestjs/common';
import { ItemInBoxService } from './item-in-box.service';
import { ItemInBoxResolver } from './item-in-box.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemInBox } from './entities/item-in-box.entity';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [TypeOrmModule.forFeature([ItemInBox]), forwardRef(() => ItemModule)],
  providers: [ItemInBoxResolver, ItemInBoxService],
  exports: [ItemInBoxService]
})
export class ItemInBoxModule {}
