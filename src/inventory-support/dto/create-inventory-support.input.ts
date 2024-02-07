import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInventorySupportInput {

  @Field()
  inventoryId:string
  
  @Field()
  zoneId: number;

  @Field()
  governorateId: number;
}
