import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserRoleService } from './user-role.service';
import { UserRole } from './entities/user-role.entity';
import { CreateUserRoleInput } from './dto/create-user-role.input';
import { UpdateUserRoleInput } from './dto/update-user-role.input';

@Resolver(() => UserRole)
export class UserRoleResolver {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Mutation(() => UserRole)
  createUserRole(@Args('createUserRoleInput') createUserRoleInput: CreateUserRoleInput) {
    return this.userRoleService.create(createUserRoleInput);
  }

  @Query(() => [UserRole], { name: 'userRole' })
  findAll() {
    return this.userRoleService.findAll();
  }

  @Query(() => UserRole, { name: 'userRole' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userRoleService.findOne(id);
  }

  @Mutation(() => UserRole)
  updateUserRole(@Args('updateUserRoleInput') updateUserRoleInput: UpdateUserRoleInput) {
    return this.userRoleService.update(updateUserRoleInput.id, updateUserRoleInput);
  }

  @Mutation(() => UserRole)
  removeUserRole(@Args('id', { type: () => Int }) id: number) {
    return this.userRoleService.remove(id);
  }
}
