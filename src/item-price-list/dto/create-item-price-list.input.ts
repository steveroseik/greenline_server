import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemPriceListInput {

  @Field()
  itemSku: string

  @Field()
  itemPriceId: number
}
