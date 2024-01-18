import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourierSheetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
