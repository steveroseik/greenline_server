import { Field, InputType, Int } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()
export class ItemInBoxPageInput extends PaginationInput{

    @Field(() => [Int], {nullable: true})
    inventoryIds?: number[];
}