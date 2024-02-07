import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { User } from "src/user/entities/user.entity";
import { FinancialRequestStatus } from "src/financial-request-status/entities/financial-request-status.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("fromAccountId", ["fromAccountId"], {})
@Index("toAccountId", ["toAccountId"], {})
@Index("approvedById", ["approvedById"], {})
@Entity("financialTransaction", { schema: "greenline_db" })
@ObjectType('financialTransaction')
export class FinancialTransaction {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "type" })
  @Field()
  type: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("varchar", { name: "fromAccountId" })
  @Field()
  fromAccountId: string;

  @Column("varchar", { name: "toAccountId" })
  @Field()
  toAccountId: string;

  @Column("float", { name: "amount", precision: 12 })
  @Field()
  amount: number;

  @Column("varchar", { name: "receipt", length: 255 })
  @Field()
  receipt: string;

  @Column("int", { name: "latestStatus" })
  @Field()
  latestStatus: number;

  @Column("varchar", { name: "approvedById" })
  @Field()
  approvedById: string;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @ManyToOne(
    () => FinancialAccount,
    (financialAccount) => financialAccount.transactionsSent,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "fromAccountId", referencedColumnName: "id" }])
  @Field(() => FinancialAccount)
  fromAccount: FinancialAccount;

  @ManyToOne(
    () => FinancialAccount,
    (financialAccount) => financialAccount.transactionsReceived,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "toAccountId", referencedColumnName: "id" }])
  @Field(() => FinancialAccount)
  toAccount: FinancialAccount;

  @ManyToOne(() => User, (user) => user.financialTransactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "approvedById", referencedColumnName: "id" }])
  @Field(() => User)
  approvedBy: User;

  @OneToOne(
    () => FinancialRequestStatus,
    (financialRequestStatus) => financialRequestStatus.request
  )
  @Field(() => FinancialRequestStatus)
  financialRequestStatus: FinancialRequestStatus;
}
