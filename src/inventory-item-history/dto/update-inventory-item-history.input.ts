import { CreateInventoryItemHistoryInput } from './create-inventory-item-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInventoryItemHistoryInput extends PartialType(CreateInventoryItemHistoryInput) {
  @Field(() => Int)
  id: number;
}
