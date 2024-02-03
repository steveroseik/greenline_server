import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourierSheet } from "src/courier-sheet/entities/courier-sheet.entity";
import { Order } from "src/order/entities/order.entity";
import { SheetOrderStatusHistory } from "src/sheet-order-status-history/entities/sheet-order-status-history.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("sheetId", ["sheetId"], {})
@Index("orderId", ["orderId"], {})
@Entity("sheetOrder", { schema: "greenline_db" })
@ObjectType('sheetOrder')
export class SheetOrder {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "sheetId" })
  @Field()
  sheetId: number;

  @Column("int", { name: "orderId" })
  @Field()
  orderId: number;

  @Column("int", { name: "latestStatus" })
  @Field()
  latestStatus: number;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @ManyToOne(() => CourierSheet, (courierSheet) => courierSheet.sheetOrders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "sheetId", referencedColumnName: "id" }])
  @Field(() => CourierSheet)
  sheet: CourierSheet;

  @ManyToOne(() => Order, (order) => order.sheetOrders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "id" }])
  @Field(() => Order)
  order: Order;

  @OneToMany(
    () => SheetOrderStatusHistory,
    (sheetOrderStatusHistory) => sheetOrderStatusHistory.sheetOrder
  )
  @Field(() => [SheetOrderStatusHistory])
  sheetOrderStatusHistory: SheetOrderStatusHistory[];
}
