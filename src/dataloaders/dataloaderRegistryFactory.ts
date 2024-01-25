import { Injectable } from "@nestjs/common";
import { UserRoleService } from "src/user-role/user-role.service";
import { DataloaderRegistry } from "./dataLoaderRegistry";
import { RoleService } from "src/role/role.service";



@Injectable()
export class DataloaderRegistryFactory {
  constructor(
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,) {}

  public create() {
    return new DataloaderRegistry(this.userRoleService, this.roleService);
  }
}