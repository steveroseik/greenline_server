import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { User } from "src/user/entities/user.entity";
import { FinancialRequestStatus } from "src/financial-request-status/entities/financial-request-status.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("fromAccount", ["fromAccount"], {})
@Index("toAccount", ["toAccount"], {})
@Index("approvedBy", ["approvedBy"], {})
@Entity("financialTransaction", { schema: "greenline_db" })
@ObjectType('financialTransaction')
export class FinancialTransaction {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "type" })
  @Field()
  type: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("int", { name: "fromAccountId" })
  @Field()
  fromAccountId: number;

  @Column("int", { name: "toAccountId" })
  @Field()
  toAccountId: number;

  @Column("float", { name: "amount", precision: 12 })
  @Field()
  amount: number;

  @Column("varchar", { name: "receipt", length: 255 })
  @Field()
  receipt: string;

  @Column("int", { name: "latestStatus" })
  @Field()
  latestStatus: number;

  @Column("int", { name: "approvedById" })
  @Field()
  approvedById: number;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @ManyToOne(
    () => FinancialAccount,
    (financialAccount) => financialAccount.transactionsSent,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "fromAccount", referencedColumnName: "id" }])
  @Field(() => FinancialAccount)
  fromAccount: FinancialAccount;

  @ManyToOne(
    () => FinancialAccount,
    (financialAccount) => financialAccount.transactionsReceived,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "toAccount", referencedColumnName: "id" }])
  @Field(() => FinancialAccount)
  toAccount: FinancialAccount;

  @ManyToOne(() => User, (user) => user.financialTransactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "approvedBy", referencedColumnName: "id" }])
  @Field(() => User)
  approvedBy: User;

  @OneToOne(
    () => FinancialRequestStatus,
    (financialRequestStatus) => financialRequestStatus.request
  )
  @Field(() => FinancialRequestStatus)
  financialRequestStatus: FinancialRequestStatus;
}
