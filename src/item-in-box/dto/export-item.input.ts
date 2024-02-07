import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ItemCountInput{

    @Field()
    id: number;

    @Field()
    count:number
}