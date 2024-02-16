import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateItemPriceInput } from 'src/item-price/dto/create-item-price.input';

@InputType()
export class CreateSingleItemInput {

  @Field()
  sku: string;

  @Field({ nullable: true})
  merchantSku?: string;

  @Field()
  merchantId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  colorHex?: string;

  @Field({ nullable: true })
  size?: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;

  @Field(() => [CreateItemPriceInput], { nullable: true })
  itemPrices?: CreateItemPriceInput[]
  
}
