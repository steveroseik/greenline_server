import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("fromAccountId", ["fromAccountId"], {})
@Entity("expense", { schema: "greenline_db" })
@ObjectType('expense')
export class Expense {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "type", length: 255 })
  @Field()
  type: string;

  @Column("int", { name: "fromAccountId"})
  @Field()
  fromAccountId: number;

  @Column("float", { name: "amount", precision: 12 })
  @Field()
  amount: number;

  @Column("varchar", { name: "receipt", length: 255 })
  @Field()
  receipt: string;

  @Column("varchar", { name: "comment", length: 255 })
  @Field()
  comment: string;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @ManyToOne(
    () => FinancialAccount,
    (financialAccount) => financialAccount.expenses,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "fromAccountId", referencedColumnName: "id" }])
  @Field(() => FinancialAccount)
  fromAccount: FinancialAccount;
}
