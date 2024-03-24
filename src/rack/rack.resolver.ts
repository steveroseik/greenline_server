import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { RackService } from './rack.service';
import { Rack } from './entities/rack.entity';
import { CreateRackInput } from './dto/create-rack.input';
import { UpdateRackInput } from './dto/update-rack.input';
import { Ballot } from 'src/ballot/entities/ballot.entity';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { RacksPage } from './entities/rack-page.entity';
import { PaginateRacksInput } from './dto/paginate-racks.input';

@Resolver(() => Rack)
export class RackResolver {

  
  constructor(private readonly rackService: RackService) {}

  @Query( () => RacksPage)
  paginateRacks(@Args('input') input:PaginateRacksInput){
    return this.rackService.paginateRacks(input);
  }



  @Mutation(() => Rack)
  updateRack(@Args('updateRackInput') updateRackInput: UpdateRackInput) {
    return this.rackService.update(updateRackInput.id, updateRackInput);
  }

  @Mutation(() => Rack)
  removeRack(@Args('id', { type: () => Int }) id: number) {
    return this.rackService.remove(id);
  }

  @ResolveField(() => [Ballot])
  ballots(@Parent() rack:Rack, 
  @Context() { loaders } : { loaders : DataloaderRegistry }){
    return loaders.BallotsInRackDataLoader.load(rack.id);
  }
}
