import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserRoleInputAdvanced{
  
  
  @Field()
  id: string;

  @Field(() => [Int])
  roles:number[];

}
