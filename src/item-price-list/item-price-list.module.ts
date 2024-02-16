import { Module } from '@nestjs/common';
import { ItemPriceListService } from './item-price-list.service';
import { ItemPriceListResolver } from './item-price-list.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPriceList } from './entities/item-price-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemPriceList])],
  providers: [ItemPriceListResolver, ItemPriceListService],
  exports: [ItemPriceListService]
})
export class ItemPriceListModule {}
