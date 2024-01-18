import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFinancialRequestStatusInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
