import { SendTransactionInput } from './send-transaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFinancialTransactionInput extends PartialType(SendTransactionInput) {
  @Field(() => Int)
  id: number;
}
