import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
var _ = require('lodash');

class ItemInBoxCountLoader {
   public static create(service: ItemInBoxService) {
      return new DataLoader<{sku: string, inventoryId: number}, number> (async (keys: readonly {sku: string, inventoryId: number}[]) => {
      const items = await service.findItemsCount(keys);
      console.log(items);
      const result =  keys.map((key) => items.find(item => item.itemSku == key.sku)['total_count']?? 0);
      return result;
    });
  }
}

export default ItemInBoxCountLoader