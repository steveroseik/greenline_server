import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dataloader {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
