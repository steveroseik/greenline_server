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
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import { Transform } from "class-transformer";

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

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("int", { name: "merchantId" })
  @Field()
  merchantId: number;

  
  @Column("decimal", { name: "balance", precision: 10, scale: 2, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String, { nullable: true })
  balance: number;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;

}
