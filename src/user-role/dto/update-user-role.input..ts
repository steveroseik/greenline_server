import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserRoleInput{
  
  
  @Field()
  id: string;

  @Field(() => [Int])
  rolesToRemove:number[];

  @Field(() => [Int])
  rolesToAdd:number[];

}
