import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFinancialTransactionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
