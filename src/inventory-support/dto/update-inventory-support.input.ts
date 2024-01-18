import { CreateInventorySupportInput } from './create-inventory-support.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInventorySupportInput extends PartialType(CreateInventorySupportInput) {
  @Field(() => Int)
  id: number;
}
