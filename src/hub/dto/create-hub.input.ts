import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHubInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
