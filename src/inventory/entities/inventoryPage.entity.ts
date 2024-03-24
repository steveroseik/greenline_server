import { Field, ObjectType } from "@nestjs/graphql";
import { PaginationResponse } from "support/page-response.entity";
import { Inventory } from "./inventory.entity";

@ObjectType()
export class InventoryPage extends PaginationResponse{


    @Field(() => [Inventory])
    data: Inventory[]

}