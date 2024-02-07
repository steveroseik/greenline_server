import { Field, ObjectType } from "@nestjs/graphql";
import { Item } from "./item.entity";

import { PaginationResponse } from "support/page-response.entity";

@ObjectType()
export class ItemPage extends PaginationResponse{

    @Field(() => [Item])
    data:Item[];
}