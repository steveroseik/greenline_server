import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInBoxInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
