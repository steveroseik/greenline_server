import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { Inventory } from './entities/inventory.entity';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { UpdateInventoryInput } from './dto/update-inventory.input';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';
import { ItemInBoxService } from 'src/item-in-box/item-in-box.service';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { Rack } from 'src/rack/entities/rack.entity';

@Resolver(() => Inventory)
export class InventoryResolver {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly itemInBoxService: ItemInBoxService) {}

  @Mutation(() => Inventory)
  createInventory(@Args('createInventoryInput') createInventoryInput: CreateInventoryInput) {
    return this.inventoryService.create(createInventoryInput);
  }

  @Mutation(() => Boolean)
  async createFakeInventory(): Promise<boolean> {

    return await this.inventoryService.createFake();

  }

  @Query(() => [Inventory])
  findAllInventories() {
    return this.inventoryService.findAll();
  }

  @Query(() => Inventory, { name: 'inventory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryService.findOne(id);
  }

  @Mutation(() => Inventory)
  updateInventory(@Args('updateInventoryInput') updateInventoryInput: UpdateInventoryInput) {
    return this.inventoryService.update(updateInventoryInput.id, updateInventoryInput);
  }

  @Mutation(() => Inventory)
  removeInventory(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryService.remove(id);
  }

  @ResolveField(() => [ItemInBox])
  async itemsInInventory(@Parent() inventory:Inventory,
  @Context() { loaders } : { loaders:DataloaderRegistry }){
    return await loaders.ItemInBoxInventoryLoader.load(inventory.id);
  }

  @ResolveField(() => [Rack])
  async racks(@Parent() inventory:Inventory, @Context() { loaders } : { loaders:DataloaderRegistry}){
    return loaders.RackInventoryLoader.load(inventory.id);
  }
}
