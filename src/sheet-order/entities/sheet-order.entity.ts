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
import { Field, ObjectType } from "@nestjs/graphql";
import { OrderStatusEnum } from "support/enums";

@Index("sheetId", ["sheetId"], {})
@Index("orderId", ["orderId"], {})
@Entity("sheet-order", { schema: "greenline_db" })
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

  @Column("boolean", { name: "adminPass", default: false })
  @Field()
  adminPass:boolean

  @Column("boolean", { name: "financePass", default: false })
  @Field()
  financePass:boolean

  @Column("int", { name: "transactionId", nullable: true})
  @Field()
  transactionId?: number;

  @Column("datetime", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @ManyToOne(() => CourierSheet, (courierSheet) => courierSheet.sheetOrders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })

  @Field(() => CourierSheet)
  sheet: CourierSheet;

  // @ManyToOne(() => Order, (order) => order.sheetOrders, {
  //   onDelete: "RESTRICT",
  //   onUpdate: "RESTRICT",
  // })
  // @JoinColumn([{ name: "orderId", referencedColumnName: "id" }])
  // @Field(() => Order)
  // order: Order;

  // @OneToMany(
  //   () => SheetOrderStatusHistory,
  //   (sheetOrderStatusHistory) => sheetOrderStatusHistory.sheetOrder
  // )
  // @Field(() => [SheetOrderStatusHistory])
  // sheetOrderStatusHistory: SheetOrderStatusHistory[];
}
