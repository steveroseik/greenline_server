import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { ItemPage } from './entities/itemPage.entity';
import { PaginationInput } from 'support/pagination.input';
import { count } from 'console';
import { Public } from 'src/auth/decorators/publicDecorator';
import { ItemPriceService } from 'src/item-price/item-price.service';
import { CurrentUser } from 'src/auth/decorators/currentUserDecorator';
import { ForbiddenError } from '@nestjs/apollo';
import { paginateItemsInput } from './dto/paginate-items.input';
import { ItemPrice } from 'src/item-price/entities/item-price.entity';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService,
  private itemInBoxService:ItemInBoxService) {}

  @Mutation(() => Int)
  createItem(@Args('createItemInput') createItemInput: CreateItemInput,
  @CurrentUser("merchantId") merchantId:number) {
    if (merchantId === undefined){
      return new ForbiddenError('cannot continue');
    }
    createItemInput.merchantId = merchantId;
    return this.itemService.create(createItemInput);
  }

  @Public()
  @Mutation(() => Boolean)
  async createFakeItem(@Args('count', { defaultValue: 1 }) count:number): Promise<boolean>{

    return this.itemService.createFake(1, count);
  }

  @Query (() => ItemPage)
  paginateItemsById(@Args('itemPageInput', {nullable: true}) itemPageInput?:paginateItemsInput){

    return this.itemService.paginateItemsById(itemPageInput);
    
  }

  @Query(() => Item)
  findSingleItem(@Args('id', { type: () => String }) id: string) {
    return this.itemService.findOne(id);
  }

  @Mutation(() => Item)
  updateItem(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return this.itemService.update(updateItemInput.id, updateItemInput);
  }

  @Mutation(() => Item)
  removeItem(@Args('id', { type: () => Int }) id: number) {
    return this.itemService.remove(id);
  }

  @ResolveField(() => [ItemPrice])
  prices(
    @Args('currency') currency:string,
    @Parent() item:Item, @Context() { loaders } : { loaders:DataloaderRegistry }){

    return loaders.ItemPricesDataLoader.load({key: item.sku, currency: currency});
  }
}
