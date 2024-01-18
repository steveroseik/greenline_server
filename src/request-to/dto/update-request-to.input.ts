import { CreateRequestToInput } from './create-request-to.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRequestToInput extends PartialType(CreateRequestToInput) {
  @Field(() => Int)
  id: number;
}
