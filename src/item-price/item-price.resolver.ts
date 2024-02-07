import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemPriceService } from './item-price.service';
import { ItemPrice } from './entities/item-price.entity';
import { CreateItemPriceInput } from './dto/create-item-price.input';
import { UpdateItemPriceInput } from './dto/update-item-price.input';

@Resolver(() => ItemPrice)
export class ItemPriceResolver {
  constructor(private readonly itemPricesService: ItemPriceService) {}

  @Mutation(() => ItemPrice)
  createItemPrice(@Args('createItemPriceInput') createItemPriceInput: CreateItemPriceInput) {
    return this.itemPricesService.create(createItemPriceInput);
  }

  @Query(() => [ItemPrice], { name: 'itemPrices' })
  findAll() {
    return this.itemPricesService.findAll();
  }

  @Query(() => ItemPrice, { name: 'itemPrice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemPricesService.findOne(id);
  }

  @Mutation(() => ItemPrice)
  updateItemPrice(@Args('updateItemPriceInput') updateItemPriceInput: UpdateItemPriceInput) {
    return this.itemPricesService.update(updateItemPriceInput.id, updateItemPriceInput);
  }

  @Mutation(() => ItemPrice)
  removeItemPrice(@Args('id', { type: () => Int }) id: number) {
    return this.itemPricesService.remove(id);
  }
}
