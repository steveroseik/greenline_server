import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourierSheetInput {

  @Field()
  userId: string

  @Field(() => [Int])
  orderIds: number[]

}
