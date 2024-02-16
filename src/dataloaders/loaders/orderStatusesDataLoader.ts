import * as DataLoader from 'dataloader';
import { OrderStatus } from 'src/order-status/entities/order-status.entity';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { Rack } from 'src/rack/entities/rack.entity';
import { RackService } from 'src/rack/rack.service';
var _ = require('lodash');

class OrderStatusesDataLoader {
   public static create(service: OrderStatusService) {
      return new DataLoader<number, OrderStatus[]> (async (keys: readonly number[]) => {
      const items = await service.findAllById(keys);
      const grouped = _.groupBy(items, 'orderId')
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default OrderStatusesDataLoader