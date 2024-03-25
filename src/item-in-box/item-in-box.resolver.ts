import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { ItemInBoxService } from './item-in-box.service';
import { ItemInBox } from './entities/item-in-box.entity';
import { CreateItemInBoxInput } from './dto/create-item-in-box.input';
import { UpdateItemInBoxInput } from './dto/update-item-in-box.input';
import { ItemService } from 'src/item/item.service';
import { Item } from 'src/item/entities/item.entity';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { ItemCountInput } from './dto/item-count.input';
import { UseGuards } from '@nestjs/common';
import { RolesGaurd } from 'src/auth/gaurds/Roles.gaurd';
import { AllowedRoles, Roles } from 'src/auth/decorators/RolesDecorator';
import { ImportNewItemInput } from './dto/import-new-item.input';
import { ItemInBoxPageInput } from './dto/paginate-item-in-box.input';
import { ItemInBoxPage } from './entities/item-in-box-page.entity';

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


  @Query(() => ItemInBoxPage)
  paginateItemInBox(@Args('input') input:ItemInBoxPageInput){

    return this.itemInBoxService.paginateItemInBox(input);
  }

  @UseGuards(RolesGaurd)
  @AllowedRoles(Roles.inventoryAdmin)
  @Mutation(() => Boolean)
  async exportItem(@Args('input') input:ItemCountInput){

    return await this.itemInBoxService.exportItem(input);

  }


  @Mutation(() => Boolean)
  async importNewItem(@Args('input') input:ImportNewItemInput){

    return await this.itemInBoxService.importNewItem(input);

  }

  @ResolveField(() => Int)
  totalCount(@Parent() item:ItemInBox,
  @Context() { loaders } : { loaders: DataloaderRegistry }) {

    return loaders.ItemInBoxCountLoader.load({sku: item.itemSku, inventoryId: item.inventoryId});
  }

  @Mutation(() => Boolean)
  async importItem(@Args('input') input:ItemCountInput){
    return await this.itemInBoxService.importItem(input);
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

  @ResolveField(() => Item, { nullable: true })
  item(@Parent() iib:ItemInBox, @Context() { loaders } : { loaders: DataloaderRegistry}){
    return loaders.ItemDataLoader.load(iib.itemSku);
  }
}
