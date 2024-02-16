import { Field, InputType, Int } from "@nestjs/graphql";
import { SheetOrderStatus } from "support/enums";

@InputType()

export class UpdateSheetOrdersInput{

    @Field(() => [Int])
    sheetOrderIds: number[]

    @Field(() => SheetOrderStatus)
    status: SheetOrderStatus

    @Field({ nullable: true })
    description:string

}