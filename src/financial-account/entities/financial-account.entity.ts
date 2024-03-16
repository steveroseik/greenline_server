import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { User } from "src/user/entities/user.entity";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { FinancialTransaction } from "src/financial-transaction/entities/financial-transaction.entity";
import { Expense } from "src/expense/entities/expense.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import { Transform } from "class-transformer";
import { FinancialAccountType } from "support/enums";
import Decimal from "decimal.js";

@Index("userId", ["userId"], {})
@Index("merchantId", ["merchantId"], {})
@Entity("financial-account", { schema: "greenline_db" })
@ObjectType('financialAccount')
export class FinancialAccount {


  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("enum", { name: "type", enum: FinancialAccountType })
  @Field(() => FinancialAccountType)
  type:FinancialAccountType

  @Column("varchar", { name: "userId", nullable: true })
  @Field({ nullable: true })
  userId?: string;

  @Column("int", { name: "merchantId", nullable: true })
  @Field({ nullable: true })
  merchantId?: number;

  @Column("decimal", { name: "balance", precision: 10, scale: 2, transformer: new DecimalTransformer(), default: 0})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  balance: Decimal;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;

}
