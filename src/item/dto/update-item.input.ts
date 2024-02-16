import { CreateMultipleItems } from './create-multiple-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput extends PartialType(CreateMultipleItems) {
  @Field(() => Int)
  id: number;
}
