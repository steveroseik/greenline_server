import { Field, InputType, Int } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()

export class PaginateItemHistoryInput extends PaginationInput{

    @Field(() => Int)
    itemInBoxId: number
    
}