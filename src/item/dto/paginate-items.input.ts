import { Field, InputType } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()
export class paginateItemsInput extends PaginationInput{

    @Field({ nullable: true })
    merchantId?:number

    @Field()
    name:String

    @Field()
    sku:String
    
}