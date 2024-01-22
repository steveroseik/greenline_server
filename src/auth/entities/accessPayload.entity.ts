import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class AccessPayload{

    @Field()
    token: String;

    @Field()
    refreshToken: String;


}