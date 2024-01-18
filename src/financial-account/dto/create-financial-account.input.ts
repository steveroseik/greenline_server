import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFinancialAccountInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
