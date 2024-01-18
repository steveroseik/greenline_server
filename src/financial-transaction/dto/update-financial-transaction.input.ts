import { CreateFinancialTransactionInput } from './create-financial-transaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFinancialTransactionInput extends PartialType(CreateFinancialTransactionInput) {
  @Field(() => Int)
  id: number;
}
