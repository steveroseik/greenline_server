import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MerchantCustomerAddress {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
