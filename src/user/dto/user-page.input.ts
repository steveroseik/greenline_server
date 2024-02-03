import { Field, InputType } from "@nestjs/graphql";
import { PaginationInput } from "support/pagination.input";

@InputType()
export class UserPageInput extends PaginationInput{

    @Field()
    roles:number[]

    @Field()
    type:string
}
