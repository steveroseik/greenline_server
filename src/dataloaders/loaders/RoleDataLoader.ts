import * as DataLoader from 'dataloader';
import { Role } from 'src/role/entities/role.entity';
import { RoleService } from 'src/role/role.service';
var _ = require('lodash');

class RoleDataLoader {
   public static create(service: RoleService) {
      return new DataLoader<number, Role> (async (keys: readonly number[]) => {
      const roles = await service.findAllRoles(keys);
      const result = keys.map((key) => roles.find(role => role.id == key));
      console.log(result);
      return result;
    });
  }
}

export default RoleDataLoader