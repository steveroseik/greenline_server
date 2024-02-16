import { InputType, Int, Field } from '@nestjs/graphql';
import { AddInventoryPriceInput } from 'src/inventory-prices/dto/add-inventory-price.input';
import { CreateInventoryPriceInput } from 'src/inventory-prices/dto/create-inventory-price.input';
import { InventoryRentType } from 'support/enums';
import { GeoLocation } from 'support/geolocation.type';

@InputType()
export class CreateInventoryInput {
  
  
  @Field()
  name: string

  @Field(() => InventoryRentType)
  rentType: InventoryRentType
  
  @Field({ nullable: true})
  zoneId?: number

  @Field({ nullable: true})
  hubId?: number


  @Field({ nullable: true})
  module?: number

  @Field(() => GeoLocation, { nullable: true})
  location?: JSON

  @Field({ nullable: true})
  numberOfRacks?: number

  @Field({ nullable: true})
  rackLevel?: number

  @Field({ nullable: true})
  ballotPerRack?: number

  @Field({ nullable: true})
  boxPerBallot?: number

  @Field(() => [AddInventoryPriceInput], { nullable: true})
  inventoryPrices: AddInventoryPriceInput[]
}
