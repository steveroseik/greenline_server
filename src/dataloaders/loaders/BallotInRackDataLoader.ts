import * as DataLoader from 'dataloader';
import { BallotService } from 'src/ballot/ballot.service';
import { Ballot } from 'src/ballot/entities/ballot.entity';
import { Item } from 'src/item/entities/item.entity';
import { ItemService } from 'src/item/item.service';
var _ = require('lodash');

class BallotsInRackDataLoader {
   public static create(service: BallotService) {
      return new DataLoader<number, Ballot> (async (keys: readonly number[]) => {
      const items = await service.findInRackIds(keys);
      const grouped = _.groupBy(items, 'rackId');
      const result = keys.map((key) => grouped.hasOwnProperty(key) ? grouped[key] : []);
      return result;
    });
  }
}

export default BallotsInRackDataLoader