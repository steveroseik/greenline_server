import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class EventListenObject{
    @Field()
    message:string
}