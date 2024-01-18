import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RackService } from './rack.service';
import { Rack } from './entities/rack.entity';
import { CreateRackInput } from './dto/create-rack.input';
import { UpdateRackInput } from './dto/update-rack.input';

@Resolver(() => Rack)
export class RackResolver {
  constructor(private readonly rackService: RackService) {}

  @Mutation(() => Rack)
  createRack(@Args('createRackInput') createRackInput: CreateRackInput) {
    return this.rackService.create(createRackInput);
  }

  @Query(() => [Rack], { name: 'rack' })
  findAll() {
    return this.rackService.findAll();
  }

  @Query(() => Rack, { name: 'rack' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rackService.findOne(id);
  }

  @Mutation(() => Rack)
  updateRack(@Args('updateRackInput') updateRackInput: UpdateRackInput) {
    return this.rackService.update(updateRackInput.id, updateRackInput);
  }

  @Mutation(() => Rack)
  removeRack(@Args('id', { type: () => Int }) id: number) {
    return this.rackService.remove(id);
  }
}
