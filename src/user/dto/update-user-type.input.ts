import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserTypeInput {
    
    @Field()
    id:string

    @Field()
    type:string
}