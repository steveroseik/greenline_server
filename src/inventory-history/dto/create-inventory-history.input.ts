import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInventoryHistoryInput {


  @Field()
  itemInBoxId: number;


  @Field()
  description: string;


  @Field()
  type: number;


  @Field()
  amount: number;
}
