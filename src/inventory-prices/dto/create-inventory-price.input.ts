import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateInventoryPriceInput {
  
  @Field()
  inventoryId: number;

  @Field()
  currency:string

  @Field(() => Float)
  pricePerUnit:number

  @Field(() => Float, { nullable:  true})
  discount?: number

  @Field({ nullable:  true})
  startDiscount?: Date

  @Field({ nullable:  true})
  endDiscount?: Date

}
