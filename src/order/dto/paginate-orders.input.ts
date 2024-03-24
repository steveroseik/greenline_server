import { Field, InputType, Int } from "@nestjs/graphql";
import { OrderStatusEnum } from "support/enums";
import { PaginationInput } from "support/pagination.input";

@InputType()
export class PaginateOrdersInput extends PaginationInput{

    @Field(() => [Int], { nullable: true })
    merchantIds?: number[];

    @Field(() => [OrderStatusEnum], {nullable: true})
    statuses?: OrderStatusEnum[]

    @Field({ nullable: true })
    date?: Date
    


}