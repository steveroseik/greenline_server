import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoxService } from './box.service';
import { Box } from './entities/box.entity';
import { CreateBoxInput } from './dto/create-box.input';
import { UpdateBoxInput } from './dto/update-box.input';

@Resolver(() => Box)
export class BoxResolver {
  constructor(private readonly boxService: BoxService) {}

  @Mutation(() => Box)
  createBox(@Args('createBoxInput') createBoxInput: CreateBoxInput) {
    return this.boxService.create(createBoxInput);
  }

  @Query(() => [Box], { name: 'box' })
  findAll() {
    return this.boxService.findAll();
  }

  @Query(() => Box, { name: 'box' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boxService.findOne(id);
  }

  @Mutation(() => Box)
  updateBox(@Args('updateBoxInput') updateBoxInput: UpdateBoxInput) {
    return this.boxService.update(updateBoxInput.id, updateBoxInput);
  }

  @Mutation(() => Box)
  removeBox(@Args('id', { type: () => Int }) id: number) {
    return this.boxService.remove(id);
  }
}
