import { CreateItemPriceInput } from './create-item-price.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemPriceInput extends PartialType(CreateItemPriceInput) {
  @Field(() => Int)
  id: number;
}
