import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchantCustomerAddressInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
