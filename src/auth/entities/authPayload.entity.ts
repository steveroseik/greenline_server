import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuthPayload {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
