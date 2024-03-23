import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchantDomesticShippingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
