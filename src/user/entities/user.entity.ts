import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { UserAddress } from "src/user-address/entities/user-address.entity";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { SheetOrderStatusHistory } from "src/sheet-order-status-history/entities/sheet-order-status-history.entity";
import { FinancialTransaction } from "src/financial-transaction/entities/financial-transaction.entity";
import { Request } from "src/request/entities/request.entity";
import { CourierSheet } from "src/courier-sheet/entities/courier-sheet.entity";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Entity("user", { schema: "greenline_db" })
@ObjectType('user')
export class User {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "type" })
  @Field()
  type: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("varchar", { name: "email", length: 255 })
  @Field()
  email: string;

  @Column("datetime", { name: "birthdate" })
  @Field()
  birthdate: Date;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.user)
  @Field(() => [UserAddress])
  userAddresses: UserAddress[];

  @OneToMany(
    () => FinancialAccount,
    (financialAccount) => financialAccount.user
  )
  @Field(() => [FinancialAccount])
  financialAccounts: FinancialAccount[];

  @OneToMany(
    () => SheetOrderStatusHistory,
    (sheetOrderStatusHistory) => sheetOrderStatusHistory.user
  )
  @Field(() => [SheetOrderStatusHistory])
  sheetOrderStatusHistories: SheetOrderStatusHistory[];

  @OneToMany(
    () => FinancialTransaction,
    (financialTransaction) => financialTransaction.approvedBy
  )
  @Field(() => [FinancialTransaction])
  financialTransactions: FinancialTransaction[];

  @OneToMany(() => Request, (request) => request.from)
  @Field(() => [Request])
  requestsSent: Request[];

  @OneToMany(() => CourierSheet, (courierSheet) => courierSheet.user)
  @Field(() => [CourierSheet])
  courierSheets: CourierSheet[];

  @OneToMany(() => Order, (order) => order.user)
  @Field(() => [Order])
  orders: Order[];

  @ManyToMany(() => Request, (request) => request.users)
  @Field(() => [Request])
  requestsReceived: Request[];
}
