import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { ItemPriceListService } from './item-price-list.service';
import { ItemPriceList } from './entities/item-price-list.entity';
import { CreateItemPriceListInput } from './dto/create-item-price-list.input';
import { UpdateItemPriceListInput } from './dto/update-item-price-list.input';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { ItemPrice } from 'src/item-price/entities/item-price.entity';

@Resolver(() => ItemPriceList)
export class ItemPriceListResolver {
  constructor(private readonly itemPriceListService: ItemPriceListService) {}

  @Mutation(() => ItemPriceList)
  createItemPriceList(@Args('createItemPriceListInput') createItemPriceListInput: CreateItemPriceListInput) {
    return this.itemPriceListService.create(createItemPriceListInput);
  }

  @Query(() => ItemPriceList, { name: 'itemPriceList' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemPriceListService.findOne(id);
  }

  @Mutation(() => ItemPriceList)
  updateItemPriceList(@Args('updateItemPriceListInput') updateItemPriceListInput: UpdateItemPriceListInput) {
    return this.itemPriceListService.update(updateItemPriceListInput.id, updateItemPriceListInput);
  }

  @Mutation(() => ItemPriceList)
  removeItemPriceList(@Args('id', { type: () => Int }) id: number) {
    return this.itemPriceListService.remove(id);
  }

  @ResolveField(() => [ItemPrice])
  info(@Parent() item:ItemPriceList, @Context() { loaders } : { loaders:DataloaderRegistry}){

    return loaders.ItemPricesDataLoader.load(item.itemPriceId);
  }
}
