import { CreateRequestStatusHistoryInput } from './create-request-status-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRequestStatusHistoryInput extends PartialType(CreateRequestStatusHistoryInput) {
  @Field(() => Int)
  id: number;
}
