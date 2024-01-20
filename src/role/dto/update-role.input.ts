import { CreateRolesInput } from './create-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoleInput extends PartialType(CreateRolesInput) {
  @Field(() => Int)
  id: number;
}
