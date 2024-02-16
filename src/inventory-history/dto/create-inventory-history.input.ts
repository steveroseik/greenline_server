import { InputType, Int, Field } from '@nestjs/graphql';
import { InventoryItemHistory } from 'support/enums';

@InputType()
export class CreateInventoryHistoryInput {


  @Field()
  itemInBoxId: number;


  @Field()
  description: string;


  @Field(() =>  InventoryItemHistory)
  type: InventoryItemHistory;


  @Field()
  amount: number;
}
