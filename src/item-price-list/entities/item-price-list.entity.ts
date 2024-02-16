import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Index, PrimaryColumn } from 'typeorm';

@Index("itemSku", ["itemSku"], {})
@Entity('item-price-list')
@ObjectType()
export class ItemPriceList {

  @PrimaryColumn("varchar", {name: "itemSku", length: 255})
  @Field()
  itemSku: string;

  @PrimaryColumn("int", {name: "itemPriceId"})
  @Field()
  itemPriceId: number;
}
