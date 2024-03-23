import { CreateMerchantDomesticShippingInput } from './create-merchant-domestic-shipping.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMerchantDomesticShippingInput extends PartialType(CreateMerchantDomesticShippingInput) {
  @Field(() => Int)
  id: number;
}
