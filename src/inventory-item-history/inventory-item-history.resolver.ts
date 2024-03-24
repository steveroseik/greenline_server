import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InventoryItemHistoryService } from './inventory-item-history.service';
import { InventoryItemHistory } from './entities/inventory-item-history.entity';
import { CreateInventoryItemHistoryInput } from './dto/create-inventory-item-history.input';
import { UpdateInventoryItemHistoryInput } from './dto/update-inventory-item-history.input';
import { ItemHistoryPage } from './entities/item-history-page.entity';
import { PaginateItemHistoryInput } from './dto/paginateItemHistory.input';

@Resolver(() => InventoryItemHistory)
export class InventoryItemHistoryResolver {
  
  constructor(private readonly inventoryHistoryService: InventoryItemHistoryService) {}

  @Mutation(() => InventoryItemHistory)
  createInventoryHistory(@Args('createInventoryHistoryInput') createInventoryHistoryInput: CreateInventoryItemHistoryInput) {
    return this.inventoryHistoryService.create(createInventoryHistoryInput);
  }

  @Query(() => [InventoryItemHistory], { name: 'inventoryHistory' })
  findAll() {
    return this.inventoryHistoryService.findAll();
  }

  @Query(() => InventoryItemHistory, { name: 'inventoryHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryHistoryService.findOne(id);
  }

  @Query(() => ItemHistoryPage)
  paginateItemHistory(@Args('input') input: PaginateItemHistoryInput){
    return this.inventoryHistoryService.paginateItemHistory(input);
  }

  @Mutation(() => InventoryItemHistory)
  updateInventoryHistory(@Args('updateInventoryHistoryInput') updateInventoryHistoryInput: UpdateInventoryItemHistoryInput) {
    return this.inventoryHistoryService.update(updateInventoryHistoryInput.id, updateInventoryHistoryInput);
  }

  @Mutation(() => InventoryItemHistory)
  removeInventoryHistory(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryHistoryService.remove(id);
  }
}
