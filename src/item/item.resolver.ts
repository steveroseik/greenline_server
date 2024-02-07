import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { ItemPage } from './entities/itemPage.entity';
import { PaginationInput } from 'support/pagination.input';
import { count } from 'console';
import { Public } from 'src/auth/decorators/publicDecorator';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService,
  private itemInBoxService:ItemInBoxService) {}

  @Mutation(() => Item)
  createItem(@Args('createItemInput') createItemInput: CreateItemInput) {
    return this.itemService.create(createItemInput);
  }

  @Public()
  @Mutation(() => Boolean)
  async createFakeItem(@Args('count', { defaultValue: 1 }) count:number): Promise<boolean>{

    return this.itemService.createFake(1, count);
  }

  @Query (() => ItemPage)
  paginateItemsById(@Args('itemPageInput', {nullable: true}) itemPageInput?:PaginationInput){

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

  @ResolveField(() => Int)
  bundleCount(@Parent() item:Item) {
    return this.itemInBoxService.findItemOccurrence(item.sku);
  }
}
