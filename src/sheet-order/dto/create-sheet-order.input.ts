import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSheetOrderInput {


  @Field({ nullable: true })
  sheetId?: number;

  @Field()
  orderId: number;
}
