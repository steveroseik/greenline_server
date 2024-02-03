import * as DataLoader from 'dataloader';
import { Rack } from 'src/rack/entities/rack.entity';
import { RackService } from 'src/rack/rack.service';
var _ = require('lodash');

class RackInventoryLoader {
   public static create(service: RackService) {
      return new DataLoader<number, Rack[]> (async (keys: readonly number[]) => {
      const items = await service.findAllInInventories(keys);
      const grouped = _.groupBy(items, 'inventoryId')
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default RackInventoryLoader