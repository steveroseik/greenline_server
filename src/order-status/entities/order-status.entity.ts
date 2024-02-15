import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { OrderStatusEnum } from "support/enums";

@Index("orderId", ["orderId"], {})
@Entity("order-status", { schema: "greenline_db" })
@ObjectType('orderStatus')
export class OrderStatus {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "orderId" })
  @Field()
  orderId: number;

  @Column("enum", { name: "status", enum: OrderStatusEnum, default: OrderStatusEnum.idle })
  @Field(() => OrderStatusEnum)
  status:OrderStatusEnum

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;
}
