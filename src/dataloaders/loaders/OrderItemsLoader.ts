import * as DataLoader from 'dataloader';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { OrderItemService } from 'src/order-item/order-item.service';
var _ = require('lodash');

class OrderItemsLoader {
   public static create(service: OrderItemService) {
      return new DataLoader<number, OrderItem[]> (async (keys: readonly number[]) => {
      const items = await service.findFromOrderId(keys);
      const grouped = _.groupBy(items, 'orderId');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default OrderItemsLoader