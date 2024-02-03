import { Module, forwardRef } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ItemPriceService } from 'src/item-price/item-price.service';
import { ItemPriceModule } from 'src/item-price/item-price.module';
import { ItemInBoxModule } from 'src/item-in-box/item-in-box.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), ItemPriceModule, forwardRef(() => ItemInBoxModule)],
  providers: [ItemResolver, ItemService],
  exports: [ItemService]
})
export class ItemModule {}
