import { InputType, Int, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { DecimalToString } from 'support/decimal.transformer';
import { FinancialAccountType } from 'support/enums';

@InputType()
export class CreateFinancialAccountInput {
  
  @Field()
  name: string;

  @Field(() => FinancialAccountType)
  type:FinancialAccountType

  @Field({ nullable: true })
  userId?: string;

  @Field({ nullable: true })
  merchantId?: number;

  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String, { nullable: true, defaultValue: "0"})
  balance?: number;
  

}
