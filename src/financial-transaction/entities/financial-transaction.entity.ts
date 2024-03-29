import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from "typeorm";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { User } from "src/user/entities/user.entity";
import { FinancialTransactionStatus } from "src/financial-transaction-status/entities/financial-transaction-status.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import Decimal from "decimal.js";
import { TransactionStatus, TransactionType } from "support/enums";

@Index("fromAccountId", ["fromAccountId"], {})
@Index("toAccountId", ["toAccountId"], {})
@Index("approvedById", ["approvedById"], {})

@Entity("financial-transaction", { schema: "greenline_db" })
@ObjectType('financialTransaction')
export class FinancialTransaction {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("enum", { name: "type", enum:TransactionType })
  @Field(() => TransactionType)
  type: TransactionType;

  @Column("varchar", { name: "description", length: 255, nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column("varchar", { name: "fromAccountId" })
  @Field()
  fromAccountId: string;

  @Column("varchar", { name: "toAccountId" })
  @Field()
  toAccountId: string;

  @Column("decimal", { name: "amount", precision: 10, scale: 2, nullable: true, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  amount: Decimal;

  @Column("varchar", { name: "receipt", length: 255, nullable: true })
  @Field({nullable: true})
  receipt?: string;

  @Column("enum", { name: "status", enum:TransactionStatus })
  @Field(() => TransactionStatus)
  status: TransactionStatus;

  @Column("varchar", { name: "approvedById", nullable: true })
  @Field({nullable: true})
  approvedById?: string;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

}
