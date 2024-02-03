import * as DataLoader from 'dataloader';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
var _ = require('lodash');

class ItemDataLoader {
   public static create(service: ItemService) {
      return new DataLoader<string, Item> (async (keys: readonly string[]) => {
      const items = await service.findAllInKeys(keys);
      const result = keys.map((key) => items.find(item => item.sku == key));
      return result;
    });
  }
}

export default ItemDataLoader