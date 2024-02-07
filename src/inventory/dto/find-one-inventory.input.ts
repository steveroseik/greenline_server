import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class FindInventoryInput{

    @Field({ nullable: true })
    id?: number;

    @Field({ nullable: true })
    hubId?: number;
}