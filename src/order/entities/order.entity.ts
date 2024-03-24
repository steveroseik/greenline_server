import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import Decimal from "decimal.js";
import { OrderStatusEnum, OrderType, PaymentType } from "support/enums";

@Index("userId", ["userId"], {})
@Index("merchantId", ["merchantId"], {})
@Index("userAddressId", ["userAddressId"], {})
@Entity("order", { schema: "greenline_db" })
@ObjectType('order')
export class Order {

  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "otherId" , nullable: true })
  @Field({ nullable: true })
  otherId?: number;

  @Column("enum", { name: "type", enum: OrderType, default: OrderType.delivery })
  @Field(() => OrderType)
  type:OrderType

  @Column("enum", { name: "paymentType", enum: PaymentType, default: PaymentType.cash })
  @Field(() => PaymentType)
  paymentType:PaymentType

  @Column("enum", { name: "status", enum: OrderStatusEnum, default: OrderStatusEnum.idle })
  @Field(() => OrderStatusEnum)
  status: OrderStatusEnum

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("int", { name: "merchantId" })
  @Field()
  merchantId: number;

  @Column("int", { name: "userAddressId" })
  @Field()
  userAddressId: number;

  @Column("decimal", { name: "shippingPrice", precision: 10, scale: 2, default: 0.0,
  transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  shippingPrice: Decimal;

  @Column("decimal", { name: "weight", precision: 10, scale: 2, default: 0.0,
  transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  weight: Decimal;

  @Column("tinyint", { name: "includesVAT", width: 1 })
  @Field()
  includesVat: boolean;

  @Column("boolean", { name: "canOpen", default: false})
  @Field()
  canOpen: boolean

  @Column("boolean", { name: "fragile", default: false})
  @Field()
  fragile: boolean

  @Column("boolean", { name: "deliveryPart", default: false})
  @Field()
  deliveryPart: boolean

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;
}
