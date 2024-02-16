import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemPriceListInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
