import { CreateFinancialRequestStatusInput } from './create-financial-request-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFinancialRequestStatusInput extends PartialType(CreateFinancialRequestStatusInput) {
  @Field(() => Int)
  id: number;
}
