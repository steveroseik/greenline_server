import { Field, InputType, Int } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()

export class PaginateInventoryInput extends PaginationInput{

    @Field(() => Int, { nullable: true })
    hubId?: number;

    @Field(() => String, { nullable: true })
    name?: String


}