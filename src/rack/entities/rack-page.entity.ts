import { Field, ObjectType } from "@nestjs/graphql";
import { PaginationResponse } from "support/page-response.entity";
import { Rack } from "./rack.entity";

@ObjectType()

export class RacksPage extends PaginationResponse{

    @Field(() => [Rack])
    data: Rack[]

}