import { CreateCourierSheetInput } from './create-courier-sheet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCourierSheetInput extends PartialType(CreateCourierSheetInput) {
  @Field(() => Int)
  id: number;
}
