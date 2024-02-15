import { Field, ObjectType } from "@nestjs/graphql";
import { CourierSheet } from "./courier-sheet.entity";
import { PaginationResponse } from "support/page-response.entity";


@ObjectType()

export class CourierSheetPage extends PaginationResponse{


    @Field(() => [CourierSheet])
    data: CourierSheet[]

}