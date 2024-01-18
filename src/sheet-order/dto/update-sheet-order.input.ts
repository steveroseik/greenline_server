import { CreateSheetOrderInput } from './create-sheet-order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSheetOrderInput extends PartialType(CreateSheetOrderInput) {
  @Field(() => Int)
  id: number;
}
