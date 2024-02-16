import * as DataLoader from 'dataloader';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
import { SheetOrder } from 'src/sheet-order/entities/sheet-order.entity';
import { SheetOrderService } from 'src/sheet-order/sheet-order.service';
import { UserAddress } from 'src/user-address/entities/user-address.entity';
import { UserAddressService } from 'src/user-address/user-address.service';
var _ = require('lodash');

class UserAddressesDataLoader {
   public static create(service: UserAddressService) {
      return new DataLoader<string, UserAddress[]> (async (keys: readonly string[]) => {
      const items = await service.findAddressesById(keys);
      const grouped = _.groupBy(items, 'userId')
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default UserAddressesDataLoader