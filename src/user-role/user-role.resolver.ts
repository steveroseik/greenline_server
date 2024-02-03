import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { UserRoleService } from './user-role.service';
import { UserRole } from './entities/user-role.entity';
import { UpdateUserRoleInput } from './dto/update-user-role.input';
import { Role } from 'src/role/entities/role.entity';
import { RoleService } from 'src/role/role.service';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { UseGuards } from '@nestjs/common';
import { RolesGaurd } from 'src/auth/gaurds/Roles.gaurd';
import { AllowedRoles, DefinedRoles } from 'src/auth/decorators/RolesDecorator';

@Resolver(() => UserRole)
export class UserRoleResolver {
  constructor(private readonly userRoleService: UserRoleService,
      private roleService:RoleService) {}


  @Mutation(() => UserRole)
  removeUserRole(@Args('id', { type: () => Int }) id: number) {
    return this.userRoleService.remove(id);
  }

  @UseGuards(RolesGaurd)
  @AllowedRoles(...DefinedRoles.UserManagementRoles)
  @Mutation( () => Boolean)
  updateUserRoles(@Args('input') input:UpdateUserRoleInput){

    return this.userRoleService.updateUserRolesOptimized(input);
  }

  @ResolveField(() => Role)
  role(@Parent() userRole:UserRole, @Context() { loaders }: { loaders: DataloaderRegistry } ){

    return loaders.RoleDataLoader.load(userRole.roleId);
  }
}
