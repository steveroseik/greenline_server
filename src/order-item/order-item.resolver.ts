import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { OrderItemService } from './order-item.service';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { Item } from 'src/item/entities/item.entity';
import { ItemInBox } from 'src/item-in-box/entities/item-in-box.entity';

@Resolver(() => OrderItem)
export class OrderItemResolver {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Mutation(() => OrderItem)
  createOrderItem(@Args('createOrderItemInput') createOrderItemInput: CreateOrderItemInput) {
    return this.orderItemService.create(createOrderItemInput);
  }

  @Query(() => [OrderItem], { name: 'orderItem' })
  findAll() {
    return this.orderItemService.findAll();
  }

  @Query(() => OrderItem, { name: 'orderItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderItemService.findOne(id);
  }

  @Mutation(() => OrderItem)
  updateOrderItem(@Args('updateOrderItemInput') updateOrderItemInput: UpdateOrderItemInput) {
    return this.orderItemService.update(updateOrderItemInput.id, updateOrderItemInput);
  }

  @Mutation(() => OrderItem)
  removeOrderItem(@Args('id', { type: () => Int }) id: number) {
    return this.orderItemService.remove(id);
  }

  @ResolveField(() => Item)
  info(@Parent() orderItem:OrderItem, 
  @Context() { loaders } : { loaders : DataloaderRegistry} ){

    return loaders.ItemDataLoader.load(orderItem.itemSku);

  }

  @ResolveField(() => [ItemInBox])
  inventory(@Parent() orderItem:OrderItem, 
  @Context() { loaders } : { loaders : DataloaderRegistry} ){

    return loaders.ItemInBoxSkuLoader.load(orderItem.itemSku);

  }
}
