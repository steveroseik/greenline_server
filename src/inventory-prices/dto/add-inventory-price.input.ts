import { Field, Float, InputType } from "@nestjs/graphql";
import { CreateItemPriceInput } from "src/item-price/dto/create-item-price.input";
import { Double } from "typeorm";

@InputType()
export class AddInventoryPriceInput {

    @Field()
    currency:string

    @Field(() => Float)
    pricePerUnit:number

    @Field(() => Float, { nullable:  true})
    discount?: number

    @Field({ nullable:  true})
    startDiscount?: Date

    @Field({ nullable:  true})
    endDiscount?: Date

}