import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemPriceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
