import { Field, InputType } from "@nestjs/graphql";
import { CreateSingleItemInput } from "./item-single.input";

@InputType()
export class SingleItemRefInput extends CreateSingleItemInput{


    @Field()
    priceReference:number
    
}