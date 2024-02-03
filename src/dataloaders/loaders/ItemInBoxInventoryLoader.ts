import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
var _ = require('lodash');

class ItemInBoxInventoryLoader {
   public static create(service: ItemInBoxService) {
      return new DataLoader<number, ItemInBox> (async (keys: readonly number[]) => {
      const items = await service.findFromInventories(keys);
      const grouped = _.groupBy(items, 'inventoryId');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default ItemInBoxInventoryLoader