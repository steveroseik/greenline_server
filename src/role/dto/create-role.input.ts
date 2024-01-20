import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRolesInput {
  @Field(() => [Int])
  roles: number[];
}
