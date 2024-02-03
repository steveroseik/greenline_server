import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HubService } from './hub.service';
import { Hub } from './entities/hub.entity';
import { CreateHubInput } from './dto/create-hub.input';
import { UpdateHubInput } from './dto/update-hub.input';

@Resolver(() => Hub)
export class HubResolver {
  constructor(private readonly hubService: HubService) {}

  @Mutation(() => Hub)
  createHub(@Args('createHubInput') createHubInput: CreateHubInput) {
    return this.hubService.create(createHubInput);
  }

  @Query(() => [Hub], { name: 'hub' })
  findAll() {
    return this.hubService.findAll();
  }

  @Query(() => Hub, { name: 'hub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hubService.findOne(id);
  }

  @Mutation(() => Hub)
  updateHub(@Args('updateHubInput') updateHubInput: UpdateHubInput) {
    return this.hubService.update(updateHubInput.id, updateHubInput);
  }

  @Mutation(() => Hub)
  removeHub(@Args('id', { type: () => Int }) id: number) {
    return this.hubService.remove(id);
  }
}
