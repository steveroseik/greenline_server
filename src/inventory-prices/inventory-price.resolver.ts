import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InventoryPricesService } from './inventory-price.service';
import { InventoryPrice } from './entities/inventory-price.entity';
import { CreateInventoryPriceInput } from './dto/create-inventory-price.input';
import { UpdateInventoryPriceInput } from './dto/update-inventory-price.input';

@Resolver(() => InventoryPrice)
export class InventoryPricesResolver {
  constructor(private readonly inventoryPricesService: InventoryPricesService) {}

  @Mutation(() => InventoryPrice)
  createInventoryPrice(@Args('createInventoryPriceInput') createInventoryPriceInput: CreateInventoryPriceInput) {
    return this.inventoryPricesService.create(createInventoryPriceInput);
  }

  @Query(() => [InventoryPrice], { name: 'inventoryPrices' })
  findAll() {
    return this.inventoryPricesService.findAll();
  }

  @Query(() => InventoryPrice, { name: 'inventoryPrice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryPricesService.findOne(id);
  }

  @Mutation(() => InventoryPrice)
  updateInventoryPrice(@Args('updateInventoryPriceInput') updateInventoryPriceInput: UpdateInventoryPriceInput) {
    return this.inventoryPricesService.update(updateInventoryPriceInput.id, updateInventoryPriceInput);
  }

  @Mutation(() => InventoryPrice)
  removeInventoryPrice(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryPricesService.remove(id);
  }
}
