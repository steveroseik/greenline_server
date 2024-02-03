import { UserRoleService } from "src/user-role/user-role.service";
import UserRoleDataLoader from "./loaders/UserRoleDataLoader";
import { RoleService } from "src/role/role.service";
import RoleDataLoader from "./loaders/RoleDataLoader";
import { ItemService } from "src/item/item.service";
import ItemDataLoader from "./loaders/ItemDataLoader";
import { ItemInBoxService } from "src/item-in-box/item-in-box.service";
import ItemInBoxInventoryLoader from "./loaders/ItemInBoxInventoryLoader";
import { RackService } from "src/rack/rack.service";
import RackInventoryLoader from "./loaders/RackInventoryLoader";

export class DataloaderRegistry {
  private cache: Record<string, any> = {};

  constructor(
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,
    private readonly itemService: ItemService,
    private readonly itemInBoxService:ItemInBoxService,
    private readonly rackService:RackService) {}

  /**
   * Fetches a memoized service based on a string key, or invokes fallback to create one.
   */
  private get<T>(key: string, fallback: () => T): T {
    if (!this.cache[key]) {
      this.cache[key] = fallback();
    }
    return this.cache[key];
  }
  /**
   * Just a pretty type-safe facade for invoking `this.get`.
   * Make more of your own as you wish.
   */

  public get ItemDataLoader() {
    return this.get('ItemDataLoader', () => ItemDataLoader.create(this.itemService));
  }

  public get RackInventoryLoader() {
    return this.get('RackInventoryLoader', () => RackInventoryLoader.create(this.rackService));
  }

   public get ItemInBoxInventoryLoader() {
    return this.get('ItemInBoxInventoryLoader', () => ItemInBoxInventoryLoader.create(this.itemInBoxService));
  }

  public get UserRoleDataLoader() {
    return this.get('UserRoleDataLoader', () => UserRoleDataLoader.create(this.userRoleService));
  }

  public get RoleDataLoader() {
    return this.get('RoleDataLoader', () => RoleDataLoader.create(this.roleService))
  }
}