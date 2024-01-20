import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { ItemPrices } from "src/item-prices/entities/item-prices.entity";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("merchantId", ["merchantId"], {})
@Entity("item", { schema: "greenline_db" })
@ObjectType('item')
export class Item {
  @Column("varchar", { primary: true, name: "sku", length: 255 })
  @Field()
  sku: string;

  @Column("varchar", { name: "merchantSku", length: 255 })
  @Field()
  merchantSku: string;

  @Column("int", { name: "merchantId"})
  @Field()
  merchantId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("varchar", { name: "imageUrl", length: 255 })
  @Field()
  imageUrl: string;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => Merchant, (merchant) => merchant.items, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "merchantId", referencedColumnName: "id" }])
  @Field(() => Merchant)
  merchant: Merchant;

  @OneToMany(() => ItemPrices, (itemPrices) => itemPrices.item)
  @Field(() => [ItemPrices])
  itemPrices: ItemPrices[];

  @OneToMany(() => ItemInBox, (itemInBox) => itemInBox.item)
  @Field(() => [ItemInBox])
  itemsInBox: ItemInBox[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.item)
  @Field(() => [OrderItem])
  orderItems: OrderItem[];
}
