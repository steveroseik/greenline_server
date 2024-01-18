import { CreateItemInBoxInput } from './create-item-in-box.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemInBoxInput extends PartialType(CreateItemInBoxInput) {
  @Field(() => Int)
  id: number;
}
