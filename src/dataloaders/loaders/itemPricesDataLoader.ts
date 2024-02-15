import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { ItemPrice } from 'src/item-price/entities/item-price.entity';
import { ItemPriceService } from 'src/item-price/item-price.service';
var _ = require('lodash');


// TODO 
class ItemPricesDataLoader {
   public static create(service: ItemPriceService) {
      return new DataLoader<{ key: string, currency: string }, ItemPrice[]> (async (keys: { key: string; currency: string }[]) => {
      const items = await service.findItemPrices(keys);
      
      const grouped = _.groupBy(items, 'itemSku');
      const result = keys.map((key) => grouped.hasOwnProperty(key.key) ? grouped[key.key] : []);
      console.log(result);
      return result;
    });
  }
}

export default ItemPricesDataLoader