import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRequestStatusHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
