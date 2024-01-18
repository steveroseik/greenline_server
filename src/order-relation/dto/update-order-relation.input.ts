import { CreateOrderRelationInput } from './create-order-relation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderRelationInput extends PartialType(CreateOrderRelationInput) {
  @Field(() => Int)
  id: number;
}
