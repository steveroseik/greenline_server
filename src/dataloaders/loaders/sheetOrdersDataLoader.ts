import * as DataLoader from 'dataloader';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
import { SheetOrder } from 'src/sheet-order/entities/sheet-order.entity';
import { SheetOrderService } from 'src/sheet-order/sheet-order.service';
var _ = require('lodash');

class SheetOrdersDataLoader {
   public static create(service: SheetOrderService) {
      return new DataLoader<number, SheetOrder> (async (keys: readonly number[]) => {
      const items = await service.findOrdersBySheet(keys);
      const grouped = _.groupBy(items, 'sheetId')
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default SheetOrdersDataLoader