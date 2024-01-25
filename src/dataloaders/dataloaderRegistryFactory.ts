import { Injectable } from "@nestjs/common";
import { UserRoleService } from "src/user-role/user-role.service";
import { DataloaderRegistry } from "./dataLoaderRegistry";



@Injectable()
export class DataloaderRegistryFactory {
  constructor(private readonly userRoleService: UserRoleService) {}

  public create() {
    return new DataloaderRegistry(this.userRoleService);
  }
}