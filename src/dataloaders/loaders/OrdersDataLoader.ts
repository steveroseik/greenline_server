import * as DataLoader from 'dataloader';
import { Order } from 'src/order/entities/order.entity';
import { OrderService } from 'src/order/order.service';
var _ = require('lodash');

class OrderDataLoader {
   public static create(service: OrderService) {
      return new DataLoader<number, Order> (async (keys: readonly number[]) => {
      const orders = await service.findOrdersById(keys);
      const result = keys.map((key) => orders.find(item => item.id == key));
      return result;
    });
  }
}

export default OrderDataLoader