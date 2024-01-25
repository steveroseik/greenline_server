import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDataloaderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
