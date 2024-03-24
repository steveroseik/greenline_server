import { Field, InputType } from "@nestjs/graphql";
import { ItemHistoryEnum } from "support/enums";

@InputType()
export class ItemCountInput{

    @Field()
    id: number;

    @Field()
    count:number

    @Field(() => ItemHistoryEnum, { nullable: true })
    type?:ItemHistoryEnum

}