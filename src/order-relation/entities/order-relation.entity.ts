import { Column, Entity, Index, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("secondOrderId", ["secondOrderId"], {})
@Entity("order-relation", { schema: "greenline_db" })
@ObjectType('orderRelation')
export class OrderRelation {
  @Column("int", { primary: true, name: "firstOrderId" })
  @Field()
  firstOrderId: number;

  @Column("int", { primary: true, name: "secondOrderId" })
  @Field()
  secondOrderId: number;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

 
}
