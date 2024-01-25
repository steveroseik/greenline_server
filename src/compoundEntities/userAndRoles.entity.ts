import { Field } from "@nestjs/graphql";
import { UserRole } from "src/user-role/entities/user-role.entity";
import { User } from "src/user/entities/user.entity";


export class UserAndRoles{

    @Field(() => User)
    user:User;

    @Field(() => [UserRole])
    roles:UserRole[];


}