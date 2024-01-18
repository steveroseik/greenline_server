import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSheetOrderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
