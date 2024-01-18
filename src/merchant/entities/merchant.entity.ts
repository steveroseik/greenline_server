import { Column, Entity, OneToMany } from "typeorm";
import { Item } from "src/item/entities/item.entity";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Entity("merchant", { schema: "greenline_db" })
@ObjectType('merchant')
export class Merchant {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("tinyint", { name: "includesVAT", width: 1 })
  @Field()
  includesVat: boolean;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(() => Item, (item) => item.merchant)
  @Field(() => [Item])
  items: Item[];

  @OneToMany(
    () => FinancialAccount,
    (financialAccount) => financialAccount.merchant
  )
  @Field(() => [FinancialAccount])
  financialAccounts: FinancialAccount[];

  @OneToMany(() => Order, (order) => order.merchant)
  @Field(() => [Order])
  orders: Order[];
}
