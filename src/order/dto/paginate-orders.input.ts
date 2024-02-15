import { Field, InputType } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()
export class PaginateOrdersInput extends PaginationInput{

    @Field({ nullable: true })
    merchantId?: number;
    
}