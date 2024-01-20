import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SheetOrder } from "src/sheet-order/entities/sheet-order.entity";
import { OrderStatus } from "src/order-status/entities/order-status.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { User } from "src/user/entities/user.entity";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { UserAddress } from "src/user-address/entities/user-address.entity";
import { OrderRelation } from "src/order-relation/entities/order-relation.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("userId", ["userId"], {})
@Index("merchantId", ["merchantId"], {})
@Index("userAddressId", ["userAddressId"], {})
@Entity("order", { schema: "greenline_db" })
@ObjectType('order')
export class Order {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "otherId" })
  @Field()
  otherId: number;

  @Column("int", { name: "type" })
  @Field()
  type: number;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("int", { name: "merchantId" })
  @Field()
  merchantId: number;

  @Column("int", { name: "userAddressId" })
  @Field()
  userAddressId: number;

  @Column("float", { name: "shippingPrice", precision: 12 })
  @Field()
  shippingPrice: number;

  @Column("tinyint", { name: "includesVAT", width: 1 })
  @Field()
  includesVat: boolean;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(() => SheetOrder, (sheetOrder) => sheetOrder.order)
  @Field(() => [SheetOrder])
  sheetOrders: SheetOrder[];

  @OneToMany(() => OrderStatus, (orderStatus) => orderStatus.order)
  @Field(() => [OrderStatus])
  orderStatuses: OrderStatus[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  @Field(() => [OrderItem])
  orderItems: OrderItem[];

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  @Field(() => User)
  user: User;

  @ManyToOne(() => Merchant, (merchant) => merchant.orders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "merchantId", referencedColumnName: "id" }])
  @Field(() => Merchant)
  merchant: Merchant;

  @ManyToOne(() => UserAddress, (userAddress) => userAddress.orders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userAddressId", referencedColumnName: "id" }])
  @Field(() => UserAddress)
  userAddress: UserAddress;

  @OneToMany(() => OrderRelation, (orderRelation) => orderRelation.firstOrder)
  @Field(() => [OrderRelation])
  orderRelations: OrderRelation[];

  @OneToMany(() => OrderRelation, (orderRelation) => orderRelation.secondOrder)
  @Field(() => [OrderRelation])
  orderRelations2: OrderRelation[];
}
