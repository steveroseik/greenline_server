import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateListenerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
