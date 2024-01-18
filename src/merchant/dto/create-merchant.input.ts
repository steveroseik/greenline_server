import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchantInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
