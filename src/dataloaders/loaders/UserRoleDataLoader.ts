import * as DataLoader from 'dataloader';
import { UserRoleService } from "../../user-role/user-role.service";
import { UserRole } from '../../user-role/entities/user-role.entity';
var _ = require('lodash');

class UserRoleDataLoader {
   public static create(service: UserRoleService) {
      return new DataLoader<string, UserRole[]> (async (keys: readonly string[]) => {
      const userRoles = await service.findAllUserRoles(keys);
      const grouped = _.groupBy(userRoles, 'userId');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default UserRoleDataLoader