import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRequestToInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
