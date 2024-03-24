import { Field, ObjectType } from "@nestjs/graphql";
import { PaginationResponse } from "support/page-response.entity";
import { InventoryItemHistory } from "./inventory-item-history.entity";

@ObjectType()

export class ItemHistoryPage extends PaginationResponse{

    @Field(() => [InventoryItemHistory])
    data: InventoryItemHistory[]
}