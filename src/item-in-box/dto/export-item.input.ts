import { Field, InputType } from "@nestjs/graphql";
import { InventoryItemHistory } from "support/enums";

@InputType()
export class ItemCountInput{

    @Field()
    id: number;

    @Field()
    count:number

    @Field(() => InventoryItemHistory)
    type:InventoryItemHistory

}