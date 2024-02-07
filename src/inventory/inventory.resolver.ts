import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { Inventory } from './entities/inventory.entity';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { UpdateInventoryInput } from './dto/update-inventory.input';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { Rack } from 'src/rack/entities/rack.entity';
import { Public } from 'src/auth/decorators/publicDecorator';
import { UseGuards } from '@nestjs/common';
import { RolesGaurd } from 'src/auth/gaurds/Roles.gaurd';
import { AllowedRoles, Roles } from 'src/auth/decorators/RolesDecorator';
import { FindInventoryInput } from './dto/find-one-inventory.input';

@Resolver(() => Inventory)
export class InventoryResolver {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly itemInBoxService: ItemInBoxService) {}


  @Public()
  @Mutation(() => Boolean)
  async createFakeInventory(@Args('count', {defaultValue: 1}) count:number): Promise<boolean> {

    return await this.inventoryService.createFake(count);

  }


  @UseGuards(RolesGaurd)
  @AllowedRoles(Roles.inventoryAdmin)
  @Mutation(() => Boolean)
  createInventory(@Args('input') input:CreateInventoryInput){

    return this.inventoryService.create(input);
  }

  @Query(() => [Inventory])
  findAllInventories() {
    return this.inventoryService.findAll();
  }

  @Query(() => Inventory)
  findOneInventory(@Args('input') input: FindInventoryInput) {
    
    return this.inventoryService.findOne(input);
  }

  @Mutation(() => Inventory)
  updateInventory(@Args('updateInventoryInput') updateInventoryInput: UpdateInventoryInput) {
    return this.inventoryService.update(updateInventoryInput.id, updateInventoryInput);
  }

  @Mutation(() => Inventory)
  removeInventory(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryService.remove(id);
  }

  // @ResolveField(() => [ItemInBox])
  // async itemsInInventory(@Parent() inventory:Inventory,
  // @Context() { loaders } : { loaders:DataloaderRegistry }){
  //   return await loaders.ItemInBoxInventoryLoader.load(inventory.id);
  // }

  @ResolveField(() => [Rack])
  async racks(@Parent() inventory:Inventory, @Context() { loaders } : { loaders:DataloaderRegistry}){
    return loaders.RackInventoryLoader.load(inventory.id);
  }

  @ResolveField(() => Int)
  itemsCount(@Parent() inventory: Inventory, @Context() { loaders } : { loaders:DataloaderRegistry}){

    return loaders.ItemInBoxCountLoader.load(inventory.id);
  }
}
