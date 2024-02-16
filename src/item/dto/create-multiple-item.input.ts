import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateItemPriceInput } from 'src/item-price/dto/create-item-price.input';

@InputType()
export class CreateMultipleItems {

  @Field({ nullable: true })
  merchantId?: number;

  @Field()
  name: string;

  @Field(() => [String], { nullable: true })
  colors?: string[];

  @Field(() => [String], { nullable: true })
  colorsHex?: string[];

  @Field(() => [String], { nullable: true })
  sizes?: string[];

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String])
  imageUrls: string[];

  @Field(() => [CreateItemPriceInput])
  itemPrices: CreateItemPriceInput[]
  
}
