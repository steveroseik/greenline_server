import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("orderId", ["orderId"], {})
@Entity("orderStatus", { schema: "greenline_db" })
@ObjectType('orderStatus')
export class OrderStatus {
  @PrimaryGeneratedColumn({ name: "id" })
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

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
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
