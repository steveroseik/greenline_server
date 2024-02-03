import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "src/user/entities/user.entity";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { FinancialTransaction } from "src/financial-transaction/entities/financial-transaction.entity";
import { Expense } from "src/expense/entities/expense.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("userId", ["userId"], {})
@Index("merchantId", ["merchantId"], {})
@Entity("financialAccount", { schema: "greenline_db" })
@ObjectType('financialAccount')
export class FinancialAccount {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("int", { name: "merchantId" })
  @Field()
  merchantId: number;

  @Column("float", { name: "balance", precision: 12 })
  @Field()
  balance: number;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => User, (user) => user.financialAccounts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  @Field(() => User)
  user: User;

  @ManyToOne(() => Merchant, (merchant) => merchant.financialAccounts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "merchantId", referencedColumnName: "id" }])
  @Field(() => Merchant)
  merchant: Merchant;

  @OneToMany(
    () => FinancialTransaction,
    (financialTransaction) => financialTransaction.fromAccount
  )
  @Field(() => [FinancialTransaction])
  transactionsSent: FinancialTransaction[];

  @OneToMany(
    () => FinancialTransaction,
    (financialTransaction) => financialTransaction.toAccount
  )
  @Field(() => [FinancialTransaction])
  transactionsReceived: FinancialTransaction[];

  @OneToMany(() => Expense, (expense) => expense.fromAccount)
  @Field(() => [Expense])
  expenses: Expense[];
}
