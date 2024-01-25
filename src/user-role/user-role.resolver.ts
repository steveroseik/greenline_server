import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { UserRoleService } from './user-role.service';
import { UserRole } from './entities/user-role.entity';
import { CreateUserRoleInput } from './dto/create-user-role.input';
import { UpdateUserRoleInput } from './dto/update-user-role.input';
import { Role } from 'src/role/entities/role.entity';
import { RoleService } from 'src/role/role.service';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';

@Resolver(() => UserRole)
export class UserRoleResolver {
  constructor(private readonly userRoleService: UserRoleService,
      private roleService:RoleService) {}

  @Mutation(() => UserRole)
  createUserRole(@Args('createUserRoleInput') createUserRoleInput: CreateUserRoleInput) {
    return this.userRoleService.create(createUserRoleInput);
  }

  @Query(() => [UserRole], { name: 'userRole' })
  findAll() {
    return this.userRoleService.findAll();
  }

  @Mutation(() => UserRole)
  updateUserRole(@Args('updateUserRoleInput') updateUserRoleInput: UpdateUserRoleInput) {
    return this.userRoleService.update(updateUserRoleInput.id, updateUserRoleInput);
  }

  @Mutation(() => UserRole)
  removeUserRole(@Args('id', { type: () => Int }) id: number) {
    return this.userRoleService.remove(id);
  }

  @ResolveField(() => Role)
  role(@Parent() userRole:UserRole, @Context() { loaders }: { loaders: DataloaderRegistry } ){

    return loaders.RoleDataLoader.load(userRole.roleId);
  }
}
