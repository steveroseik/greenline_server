import { Field, InputType, PartialType } from "@nestjs/graphql";
import { UpdateUserInput } from "./update-user.input";

@InputType()
export class UpdateUserInfo extends PartialType(UpdateUserInput){

    @Field()
    id:string
}