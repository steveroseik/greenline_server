import { Field, ObjectType } from "@nestjs/graphql";
import { Item } from "./item.entity";

import { Cursor } from "typeorm-cursor-pagination";
import { GraphqlCursor } from "support/cursor.type";

@ObjectType()
export class ItemPage{

    @Field(() => [Item])
    data:Item[];

    @Field(() => GraphqlCursor)
    cursor:Cursor
}