import { UserRoleService } from "src/user-role/user-role.service";
import UserRoleDataLoader from "./loaders/UserRoleDataLoader";

export class DataloaderRegistry {
  private cache: Record<string, any> = {};

  constructor(private readonly userRoleService: UserRoleService) {}

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
  public get UserRoleDataLoader() {
    return this.get('UserRoleDataLoader', () => UserRoleDataLoader.create(this.userRoleService));
  }
}