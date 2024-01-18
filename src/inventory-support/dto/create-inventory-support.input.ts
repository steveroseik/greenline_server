import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInventorySupportInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
