import { InputType, Int, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import Decimal from 'decimal.js';
import { DecimalToString } from 'support/decimal.transformer';
import { TransactionType, TransactionStatus } from 'support/enums';

@InputType()
export class SendTransactionInput {
 
  
  @Field(() => TransactionType)
  type: TransactionType;

  @Field({ nullable: true})
  description?: string;
  
  @Field({ nullable: true })
  fromAccountId?: string;

  @Field()
  toAccountId: string;

  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  amount: Decimal;
  
  @Field({nullable: true})
  receipt?: string;

  @Field({nullable: true})
  approvedById?: string;

  @Field(() => TransactionStatus)
  status: TransactionStatus;

  
}
