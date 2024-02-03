import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, ResolveProperty, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { UserRoleService } from 'src/user-role/user-role.service';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { Public } from 'src/auth/decorators/publicDecorator';
import { CurrentUser } from 'src/auth/decorators/currentUserDecorator';
import { AllowedRoles, DefinedRoles, Roles} from 'src/auth/decorators/RolesDecorator';
import { ro } from '@faker-js/faker';
import { UserPageInput } from './dto/user-page.input';
import { PaginationInput } from 'support/pagination.input';
import { UserPage } from './entities/userPage.entity';
import { UseGuards } from '@nestjs/common';
import { RolesGaurd } from 'src/auth/gaurds/Roles.gaurd';
import { UpdateUserTypeInput } from './dto/update-user-type.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService,
      private userRoleService:UserRoleService) {}


  //TODO:: needs to be for admins only
  @Public()
  @Mutation(() => Boolean)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }


  @UseGuards(RolesGaurd)
  @AllowedRoles(...DefinedRoles.UserManagementRoles)
  @Query(() => UserPage)
  paginateUsers(@Args('paginateUsersInput') input:PaginationInput, 
  @CurrentUser("roles") roles:number[],
  @CurrentUser("type") type:string){

    return this.userService.paginateUsers({...input, roles, type})
  }


  @UseGuards(RolesGaurd)
  @AllowedRoles(...DefinedRoles.UserManagementRoles)
  @Mutation(() => Boolean)
  updateUserType(@Args('updateInfo') input: UpdateUserTypeInput){
    return this.userService.updateUserType(input);
  }

  @Mutation(() => Boolean)
  updateMyInfo(@Args('updateInfo') input: UpdateUserInput, 
  @CurrentUser('id') id:string) {
    return this.userService.updateMyInfo({
      ...input,
      id
    });
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  @ResolveField(() => [UserRole], {nullable: true})
  userRoles(@Parent() user:User, @Context() { loaders }: { loaders: DataloaderRegistry}): Promise<UserRole[]>{
    return loaders.UserRoleDataLoader.load(user.id);
    //this.roleService.findOne(userRole.roleId);
  }
}
