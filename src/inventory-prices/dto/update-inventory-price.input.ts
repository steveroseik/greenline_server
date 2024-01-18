import { CreateInventoryPriceInput } from './create-inventory-price.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInventoryPriceInput extends PartialType(CreateInventoryPriceInput) {
  @Field(() => Int)
  id: number;
}
