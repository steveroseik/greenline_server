import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
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
  size?: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;
}
