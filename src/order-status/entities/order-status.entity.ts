import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("orderId", ["orderId"], {})
@Entity("orderStatus", { schema: "greenline_db" })
@ObjectType('orderStatus')
export class OrderStatus {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "orderId" })
  @Field()
  orderId: number;

  @Column("int", { name: "status" })
  @Field()
  status: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => Order, (order) => order.orderStatuses, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "id" }])
  @Field(() => Order)
  order: Order;
}
