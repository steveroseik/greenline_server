import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSheetOrderStatusHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
