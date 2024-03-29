import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoxInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
