import { InputType, Int, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import Decimal from 'decimal.js';
import { OrderItemInput } from 'src/order-item/dto/order-item.input';
import { DecimalToString } from 'support/decimal.transformer';
import { OrderType, PaymentType } from 'support/enums';

@InputType()
export class CreateOrderInput {
 
  
  @Field({ nullable: true })
  otherId?: number;

  @Field(() => OrderType, { nullable: true, defaultValue: OrderType.delivery })
  type: OrderType;

  @Field(() => PaymentType, { nullable: true, defaultValue: PaymentType.cash })
  paymentType?: PaymentType;

  @Field()
  userId: string;

  @Field()
  merchantId: number;

  @Field()
  userAddressId: number;

  @Field(() => String,{nullable: true})
  @Transform(() => DecimalToString, { toPlainOnly: true })
  weight?: Decimal

  @Field(() => String)
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  shippingPrice: Decimal;

  @Field({ nullable: true, defaultValue: true })
  includesVat: boolean;

  @Field({ nullable: true, defaultValue: false })
  canOpen: boolean

  @Field({ nullable: true, defaultValue: false })
  fragile: boolean

  @Field({ nullable: true, defaultValue: false })
  deliveryPart: boolean


  @Field(() => [OrderItemInput])
  orderItems: OrderItemInput[]
  

}
