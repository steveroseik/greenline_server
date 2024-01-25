import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, ResolveProperty, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { UserRoleService } from 'src/user-role/user-role.service';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService,
      private userRoleService:UserRoleService) {}

  @Mutation(() => Boolean)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {


    return this.userService.create(createUserInput);
  }

  @Query(() => [User])
  findAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    // return this.userService.update(updateUserInput.id, updateUserInput);
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
