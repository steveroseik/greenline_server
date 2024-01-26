import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class EmailValidityPayload{

    @Field()
    isValid: boolean

    @Field({ nullable: true })
    id?: string
}