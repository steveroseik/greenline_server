import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ImportItemInput{
  
    @Field()
    itemSku: string;

    @Field()
    inventoryId:number

    @Field()
    boxId: number;

    @Field()
    count: number;
    
    @Field()
    minCount: number;   
 
}