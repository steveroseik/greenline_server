import { Injectable } from "@nestjs/common";
import { UserRoleService } from "src/user-role/user-role.service";
import { DataloaderRegistry } from "./dataLoaderRegistry";
import { RoleService } from "src/role/role.service";
import { ItemService } from "src/item/item.service";
import { ItemInBoxService } from "src/item-in-box/item-in-box.service";
import { RackService } from "src/rack/rack.service";



@Injectable()
export class DataloaderRegistryFactory {
  constructor(
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,
    private readonly itemService: ItemService,
    private readonly itemInBoxService: ItemInBoxService,
    private readonly rackService: RackService) {}

  public create() {
    return new DataloaderRegistry(this.userRoleService, 
      this.roleService, this.itemService, this.itemInBoxService,
      this.rackService);
  }
}