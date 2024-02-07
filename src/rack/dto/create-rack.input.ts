import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRackInput {
  
  
  @Field()
  inventoryId: number

  @Field()
  name:string
}
