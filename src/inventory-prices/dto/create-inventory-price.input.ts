import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInventoryPriceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
