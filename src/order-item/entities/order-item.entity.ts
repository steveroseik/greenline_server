import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Item } from "src/item/entities/item.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("itemSku", ["itemSku"], {})
@Entity("orderItem", { schema: "greenline_db" })
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

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => Order, (order) => order.orderItems, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "id" }])
  @Field(() => Order)
  order: Order;

  @ManyToOne(() => Item, (item) => item.orderItems, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "itemSku", referencedColumnName: "sku" }])
  @Field(() => Item)
  item: Item;
}
