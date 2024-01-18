import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InventorySupportService } from './inventory-support.service';
import { InventorySupport } from './entities/inventory-support.entity';
import { CreateInventorySupportInput } from './dto/create-inventory-support.input';
import { UpdateInventorySupportInput } from './dto/update-inventory-support.input';

@Resolver(() => InventorySupport)
export class InventorySupportResolver {
  constructor(private readonly inventorySupportService: InventorySupportService) {}

  @Mutation(() => InventorySupport)
  createInventorySupport(@Args('createInventorySupportInput') createInventorySupportInput: CreateInventorySupportInput) {
    return this.inventorySupportService.create(createInventorySupportInput);
  }

  @Query(() => [InventorySupport], { name: 'inventorySupport' })
  findAll() {
    return this.inventorySupportService.findAll();
  }

  @Query(() => InventorySupport, { name: 'inventorySupport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.inventorySupportService.findOne(id);
  }

  @Mutation(() => InventorySupport)
  updateInventorySupport(@Args('updateInventorySupportInput') updateInventorySupportInput: UpdateInventorySupportInput) {
    return this.inventorySupportService.update(updateInventorySupportInput.id, updateInventorySupportInput);
  }

  @Mutation(() => InventorySupport)
  removeInventorySupport(@Args('id', { type: () => Int }) id: number) {
    return this.inventorySupportService.remove(id);
  }
}
