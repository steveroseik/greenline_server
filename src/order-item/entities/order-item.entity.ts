import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Item } from "src/item/entities/item.entity";
import { Context, Field, ObjectType, Parent, ResolveField } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import Decimal from "decimal.js";
import { DataloaderRegistry } from "src/dataloaders/dataLoaderRegistry";

@Index("itemSku", ["itemSku"], {})
@Entity("order-item", { schema: "greenline_db" })
@ObjectType('orderItem')
export class OrderItem {
  @Column("int", { primary: true, name: "orderId" })
  @Field()
  orderId: number;

  @Column("varchar", { primary: true, name: "itemSku", length: 255 })
  @Field()
  itemSku: string;

  @Column("int", { name: "count" })
  @Field()
  count: number;

  @Column("decimal", { name: "frozenPrice", precision: 10, scale: 2, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  frozenPrice: Decimal;

  @Column("varchar", { name: "frozenCurrency", length: 10 })
  @Field()
  frozenCurrency: string;

  @Column("varchar", { name: "frozenColorHex", length: 50 })
  @Field()
  frozenColorHex: string;

  @Column("varchar", { name: "frozenSize", length: 10 })
  @Field()
  frozenSize: string;

  @Column("varchar", { name: "frozenName", length: 10 })
  @Field()
  frozenName: string;

  @Column('boolean', { name: "partial", default: false})
  @Field()
  partial:boolean

  @Column("int", { name: "partialCount", nullable: true})
  @Field()
  partialCount: number;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;

  @JoinColumn([{ name: "orderId", referencedColumnName: "id" }])
  @Field(() => Order)
  order: Order;

  @ResolveField(() => Item)
  info(@Parent() orderItem:OrderItem, @Context() { loaders } : { loaders:DataloaderRegistry} ){
    
    return loaders.ItemDataLoader.load(orderItem.itemSku);

  }
}
