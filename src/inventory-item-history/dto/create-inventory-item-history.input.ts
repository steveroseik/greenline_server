import { InputType, Int, Field } from '@nestjs/graphql';
import { ItemHistoryEnum } from 'support/enums';

@InputType()
export class CreateInventoryItemHistoryInput {


  @Field()
  itemInBoxId: number;


  @Field()
  description: string;


  @Field(() =>  ItemHistoryEnum)
  type: ItemHistoryEnum;


  @Field()
  amount: number;
}
