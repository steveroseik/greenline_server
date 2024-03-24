import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ImportNewItemInput{
  
    @Field()
    itemSku: string;

    @Field()
    inventoryId:number

    @Field({ nullable: true })
    boxId?: number;

    @Field({ nullable: true })
    ballotId?: number;

    @Field({ nullable: true })
    boxName?: string;

    @Field({nullable: true, defaultValue: false })
    ownedByOneMerchant: boolean

    @Field()
    count: number;
    
    @Field({ defaultValue: 5})
    minCount: number;   
 
}