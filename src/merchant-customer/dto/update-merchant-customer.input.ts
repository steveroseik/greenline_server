import { CreateMerchantCustomerInput } from './create-merchant-customer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMerchantCustomerInput extends PartialType(CreateMerchantCustomerInput) {
  @Field(() => Int)
  id: number;
}
