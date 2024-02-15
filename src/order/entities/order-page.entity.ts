import { Field, ObjectType } from "@nestjs/graphql";
import { Entity } from "typeorm";
import { Order } from "./order.entity";
import { GraphqlCursor } from "support/cursor.type";
import { Cursor } from "typeorm-cursor-pagination";
import { PaginationResponse } from "support/page-response.entity";

@ObjectType()
export class OrderPage extends PaginationResponse{

    @Field(() => [Order])
    data: Order[]

}