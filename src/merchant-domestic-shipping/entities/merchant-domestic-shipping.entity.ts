import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MerchantDomesticShipping {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
