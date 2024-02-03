import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { ItemInBoxService } from './item-in-box.service';
import { ItemInBox } from './entities/item-in-box.entity';
import { CreateItemInBoxInput } from './dto/create-item-in-box.input';
import { UpdateItemInBoxInput } from './dto/update-item-in-box.input';
import { ItemService } from 'src/item/item.service';
import { Item } from 'src/item/entities/item.entity';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';

@Resolver(() => ItemInBox)
export class ItemInBoxResolver {
  constructor(private readonly itemInBoxService: ItemInBoxService,
    private itemService:ItemService) {}

  @Mutation(() => ItemInBox)
  createItemInBox(@Args('createItemInBoxInput') createItemInBoxInput: CreateItemInBoxInput) {
    return this.itemInBoxService.create(createItemInBoxInput);
  }

  @Query(() => [ItemInBox], { name: 'itemInBox' })
  findAll() {
    return this.itemInBoxService.findAll();
  }

  @Query(() => ItemInBox, { name: 'itemInBox' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemInBoxService.findOne(id);
  }

  @Mutation(() => ItemInBox)
  updateItemInBox(@Args('updateItemInBoxInput') updateItemInBoxInput: UpdateItemInBoxInput) {
    return this.itemInBoxService.update(updateItemInBoxInput.id, updateItemInBoxInput);
  }

  @Mutation(() => ItemInBox)
  removeItemInBox(@Args('id', { type: () => Int }) id: number) {
    return this.itemInBoxService.remove(id);
  }

  @ResolveField(() => Item)
  item(@Parent() iib:ItemInBox, @Context() { loaders } : { loaders: DataloaderRegistry}){
    return loaders.ItemDataLoader.load(iib.itemSku);
  }
}
