import * as DataLoader from 'dataloader';
import { ItemPrice } from 'src/item-price/entities/item-price.entity';
import { ItemPriceService } from 'src/item-price/item-price.service';
var _ = require('lodash');


// TODO 
class ItemPricesDataLoader {
   public static create(service: ItemPriceService) {
      return new DataLoader<number, ItemPrice[]> (async (keys: number[]) => {
      const items = await service.findItemsById(keys);

      const grouped = _.groupBy(items, 'id');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      console.log(result);
      
      return result;
    });
  }
}

export default ItemPricesDataLoader