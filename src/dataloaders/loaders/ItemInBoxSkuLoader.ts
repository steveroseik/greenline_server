import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
var _ = require('lodash');

class ItemInBoxSkuLoader {
   public static create(service: ItemInBoxService) {
      return new DataLoader<string, ItemInBox> (async (keys: readonly string[]) => {
      const items = await service.findFromSkus(keys);
      const grouped = _.groupBy(items, 'itemSku');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default ItemInBoxSkuLoader