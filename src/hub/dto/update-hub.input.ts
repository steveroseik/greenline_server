import { CreateHubInput } from './create-hub.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHubInput extends PartialType(CreateHubInput) {
  @Field(() => Int)
  id: number;
}
