import { CreateRackInput } from './create-rack.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRackInput extends PartialType(CreateRackInput) {
  @Field(() => Int)
  id: number;
}
