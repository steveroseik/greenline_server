import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Double } from 'typeorm';

@InputType()
export class CreateItemPriceInput {
    
    @Field({ nullable: true, defaultValue: "EGP"})
    currency:string

    @Field(() => Float)
    price:number

    @Field(() => Float, { nullable:  true})
    discount?: number

    @Field({ nullable:  true})
    startDiscount?: Date

    @Field({ nullable:  true})
    endDiscount?: Date
}
