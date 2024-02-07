import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
var _ = require('lodash');

class ItemInBoxCountLoader {
   public static create(service: ItemInBoxService) {
      return new DataLoader<number, number> (async (keys: readonly number[]) => {
      const items = await service.findItemsCount(keys);
      const result =  keys.map((key) => items.find(item => item.inventoryId == key)['itemCount']?? 0);
      return result;
    });
  }
}

export default ItemInBoxCountLoader