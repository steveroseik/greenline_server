import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PaginationInput{
    
    @Field(() => Boolean, {defaultValue: true})
    isAsc:boolean

    @Field(() => Int, {defaultValue: 1})
    limit:number

    @Field({ nullable: true})
    afterCursor?:string

    @Field({ nullable: true})
    beforeCursor?:string
}
