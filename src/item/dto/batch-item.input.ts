import { Field, InputType } from "@nestjs/graphql";
import { CreateItemPriceInput } from "src/item-price/dto/create-item-price.input";
import { CreateSingleItemInput } from "./item-single.input";

@InputType()

export class BatchItemInput{

    @Field(() => [CreateItemPriceInput])
    itemPrices: CreateItemPriceInput[]

    @Field(() => [CreateSingleItemInput])
    items: CreateSingleItemInput[]
    
}