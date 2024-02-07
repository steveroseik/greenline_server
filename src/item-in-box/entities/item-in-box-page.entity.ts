import { Field, ObjectType } from "@nestjs/graphql";
import { PaginationResponse } from "support/page-response.entity";
import { ItemInBox } from "./item-in-box.entity";

@ObjectType()

export class ItemInBoxPage extends PaginationResponse{


    @Field(() => [ItemInBox])
    data: ItemInBox[];

}