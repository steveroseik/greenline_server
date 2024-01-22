import { CreateListenerInput } from './create-listener.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateListenerInput extends PartialType(CreateListenerInput) {
  @Field(() => Int)
  id: number;
}
