import { Field, InputType, Int } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()
export class PaginateRacksInput extends PaginationInput{

    @Field(() => [Int])
    invetoryIds: number[]

}