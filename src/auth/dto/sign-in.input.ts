import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class TokenRequestInput {
  @Field(() => String)
  token: string;
}
