import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InventoryPricesService } from './inventory-prices.service';
import { InventoryPrices } from './entities/inventory-prices.entity';
import { CreateInventoryPriceInput } from './dto/create-inventory-price.input';
import { UpdateInventoryPriceInput } from './dto/update-inventory-price.input';

@Resolver(() => InventoryPrices)
export class InventoryPricesResolver {
  constructor(private readonly inventoryPricesService: InventoryPricesService) {}

  @Mutation(() => InventoryPrices)
  createInventoryPrice(@Args('createInventoryPriceInput') createInventoryPriceInput: CreateInventoryPriceInput) {
    return this.inventoryPricesService.create(createInventoryPriceInput);
  }

  @Query(() => [InventoryPrices], { name: 'inventoryPrices' })
  findAll() {
    return this.inventoryPricesService.findAll();
  }

  @Query(() => InventoryPrices, { name: 'inventoryPrice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryPricesService.findOne(id);
  }

  @Mutation(() => InventoryPrices)
  updateInventoryPrice(@Args('updateInventoryPriceInput') updateInventoryPriceInput: UpdateInventoryPriceInput) {
    return this.inventoryPricesService.update(updateInventoryPriceInput.id, updateInventoryPriceInput);
  }

  @Mutation(() => InventoryPrices)
  removeInventoryPrice(@Args('id', { type: () => Int }) id: number) {
    return this.inventoryPricesService.remove(id);
  }
}
