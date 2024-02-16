import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import Decimal from "decimal.js";
import { ExpenseType } from "support/enums";

@Index("fromAccountId", ["fromAccountId"], {})
@Entity("expense", { schema: "greenline_db" })
@ObjectType('expense')
export class Expense {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("enum", { name: "type", enum:ExpenseType, default: ExpenseType.miscellaneous })
  @Field(() => ExpenseType)
  type: ExpenseType;

  @Column("int", { name: "fromAccountId"})
  @Field()
  fromAccountId: number;

  
  @Column("decimal", { name: "amount", precision: 10, scale: 2, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String, { nullable: true })
  amount: Decimal;

  @Column("varchar", { name: "receipt", length: 255 })
  @Field()
  receipt: string;

  @Column("varchar", { name: "comment", length: 255 })
  @Field()
  comment: string;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

}
