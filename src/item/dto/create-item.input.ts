import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateItemPriceInput } from 'src/item-price/dto/create-item-price.input';

@InputType()
export class CreateItemInput {
  @Field()
  sku: string;

  @Field({ nullable: true})
  merchantSku?: string;

  @Field({ nullable: true })
  merchantId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  size?: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;

  @Field(() => [CreateItemPriceInput])
  itemPrices: CreateItemPriceInput[]
  
}
