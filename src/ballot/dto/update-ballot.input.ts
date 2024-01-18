import { CreateBallotInput } from './create-ballot.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBallotInput extends PartialType(CreateBallotInput) {
  @Field(() => Int)
  id: number;
}
