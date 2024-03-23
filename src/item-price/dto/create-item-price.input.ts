import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import Decimal from 'decimal.js';
import { DecimalToString } from 'support/decimal.transformer';
import { Double } from 'typeorm';

@InputType()
export class CreateItemPriceInput {
    
    @Field({ nullable: true, defaultValue: "EGP"})
    currency:string

    @Field(() => String)
    @Transform(() => DecimalToString(), { toPlainOnly: true })
    price:Decimal

    @Field(() => String, { nullable:  true})
    @Transform(() => DecimalToString(), { toPlainOnly: true })
    discount?:Decimal

    @Field({ nullable:  true})
    startDiscount?: Date

    @Field({ nullable:  true})
    endDiscount?: Date
}
