import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("secondOrder", ["secondOrder"], {})
@Entity("orderRelation", { schema: "greenline_db" })
@ObjectType('orderRelation')
export class OrderRelation {
  @Column("int", { primary: true, name: "firstOrderId" })
  @Field()
  firstOrderId: number;

  @Column("int", { primary: true, name: "secondOrderId" })
  @Field()
  secondOrderId: number;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @ManyToOne(() => Order, (order) => order.orderRelations, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "firstOrder", referencedColumnName: "id" }])
  @Field(() => Order)
  firstOrder: Order;

  @ManyToOne(() => Order, (order) => order.orderRelations2, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "secondOrder", referencedColumnName: "id" }])
  @Field(() => Order)
  secondOrder: Order;
}
