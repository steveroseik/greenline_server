import { Module } from '@nestjs/common';
import { ItemPriceService } from './item-price.service';
import { ItemPriceResolver } from './item-price.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPrice } from './entities/item-prices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemPrice])],
  providers: [ItemPriceResolver, ItemPriceService],
  exports: [ItemPriceService]
})
export class ItemPriceModule {}
