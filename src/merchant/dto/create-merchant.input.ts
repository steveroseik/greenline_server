import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchantInput {
  
  
  @Field()
  name: string

  @Field()
  includesVat: boolean
}
