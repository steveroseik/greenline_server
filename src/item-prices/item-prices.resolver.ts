import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemPricesService } from './item-prices.service';
import { ItemPrices } from './entities/item-prices.entity';
import { CreateItemPriceInput } from './dto/create-item-price.input';
import { UpdateItemPriceInput } from './dto/update-item-price.input';

@Resolver(() => ItemPrices)
export class ItemPricesResolver {
  constructor(private readonly itemPricesService: ItemPricesService) {}

  @Mutation(() => ItemPrices)
  createItemPrice(@Args('createItemPriceInput') createItemPriceInput: CreateItemPriceInput) {
    return this.itemPricesService.create(createItemPriceInput);
  }

  @Query(() => [ItemPrices], { name: 'itemPrices' })
  findAll() {
    return this.itemPricesService.findAll();
  }

  @Query(() => ItemPrices, { name: 'itemPrice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemPricesService.findOne(id);
  }

  @Mutation(() => ItemPrices)
  updateItemPrice(@Args('updateItemPriceInput') updateItemPriceInput: UpdateItemPriceInput) {
    return this.itemPricesService.update(updateItemPriceInput.id, updateItemPriceInput);
  }

  @Mutation(() => ItemPrices)
  removeItemPrice(@Args('id', { type: () => Int }) id: number) {
    return this.itemPricesService.remove(id);
  }
}
