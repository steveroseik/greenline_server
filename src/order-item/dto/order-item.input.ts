import { Field, InputType } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import Decimal from "decimal.js";
import { DecimalToString } from "support/decimal.transformer";


@InputType()
export class OrderItemInput{

    @Field()
    itemSku: string

    @Field(() => String)
    @Transform(() => DecimalToString(), { toPlainOnly: true })
    frozenPrice: Decimal

    @Field()
    frozenCurrency:string

    @Transform(() => DecimalToString(), { toPlainOnly: true })
    @Field(() => String)
    weight: Decimal;

    @Field()
    count: number
}