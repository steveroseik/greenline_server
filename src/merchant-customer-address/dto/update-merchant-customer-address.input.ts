import { CreateMerchantCustomerAddressInput } from './create-merchant-customer-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMerchantCustomerAddressInput extends PartialType(CreateMerchantCustomerAddressInput) {
  @Field(() => Int)
  id: number;
}
