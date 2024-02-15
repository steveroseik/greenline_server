import { Field, InputType } from "@nestjs/graphql";
import { UserType } from "support/enums";

@InputType()
export class UpdateUserTypeInput {
    
    @Field()
    id:string

    @Field(() => UserType)
    type:UserType
}