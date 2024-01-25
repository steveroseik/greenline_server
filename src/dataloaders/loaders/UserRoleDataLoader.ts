import * as DataLoader from 'dataloader';
import { UserRoleService } from "../../user-role/user-role.service";
import { UserRole } from '../../user-role/entities/user-role.entity';
var _ = require('lodash');

class UserRoleDataLoader {
   public static create(service: UserRoleService) {
      return new DataLoader<string, UserRole[]> (async (keys: readonly string[]) => {
      const userRoles = await service.findAllUserRoles(keys);
      const grouped = _.groupBy(userRoles, 'userId');
      console.log(grouped);

      const resultMap: Record<string, UserRole[]> = {};
      // Iterate over the keys array
      keys.forEach(key => {
          // Check if the key exists in the grouped data
          if (grouped[key]) {
              // If it exists, add it to the resultMap with its corresponding value
              resultMap[key] = grouped[key];
          } else {
              // If it doesn't exist, add it to the resultMap with an empty array
              resultMap[key] = [];
          }
      });
      console.log(resultMap);
      return keys.map(key => resultMap[key] || []);
    });
  }
}

export default UserRoleDataLoader