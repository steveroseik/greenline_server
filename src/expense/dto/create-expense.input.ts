import { InputType, Int, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import Decimal from 'decimal.js';
import { DecimalToString } from 'support/decimal.transformer';
import { ExpenseType } from 'support/enums';

@InputType()
export class CreateExpenseInput {


  @Field(() => ExpenseType)
  type: ExpenseType;

  @Field()
  fromAccountId: number;

  @Field({nullable: true})
  approvedById?: string;

  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String, { nullable: true })
  amount: Decimal;

  @Field({ nullable: true})
  receipt?: string;

  @Field({ nullable: true })
  comment?: string;
}
