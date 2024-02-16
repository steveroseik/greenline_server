import { CreateItemPriceListInput } from './create-item-price-list.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemPriceListInput extends PartialType(CreateItemPriceListInput) {
  @Field(() => Int)
  id: number;
}
