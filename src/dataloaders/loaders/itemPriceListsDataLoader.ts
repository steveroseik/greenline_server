import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { ItemPriceListService } from 'src/item-price-list/item-price-list.service';
import { ItemPrice } from 'src/item-price/entities/item-price.entity';
import { ItemPriceService } from 'src/item-price/item-price.service';
var _ = require('lodash');


// TODO 
class ItemPriceListsDataLoader {
   public static create(service: ItemPriceListService) {
      return new DataLoader<string, ItemPrice[]> (async (keys: string[]) => {
      const items = await service.findItemPrices(keys);

      const grouped = _.groupBy(items, 'itemSku');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      console.log(result);
      
      return result;
    });
  }
}

export default ItemPriceListsDataLoader