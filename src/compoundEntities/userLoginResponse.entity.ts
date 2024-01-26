import { Field, ObjectType } from "@nestjs/graphql";
import { UserRole } from "src/user-role/entities/user-role.entity";
import { User } from "src/user/entities/user.entity";


@ObjectType()
export class UserTokenResponse {

    @Field(() => User)
    user: User;

    @Field(() => [UserRole])
    userRoles: UserRole[];

    @Field()
    accessToken:string;

    @Field()
    refreshToken:string;


}