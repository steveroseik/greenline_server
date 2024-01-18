import { CreateSheetOrderStatusHistoryInput } from './create-sheet-order-status-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSheetOrderStatusHistoryInput extends PartialType(CreateSheetOrderStatusHistoryInput) {
  @Field(() => Int)
  id: number;
}
