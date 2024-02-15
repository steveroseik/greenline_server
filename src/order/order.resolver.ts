import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PaginateOrdersInput } from './dto/paginate-orders.input';
import { Item } from 'src/item/entities/item.entity';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { OrderPage } from './entities/order-page.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Boolean)
  createOrder(@Args('input') createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => OrderPage)
  paginateOrders(@Args('input') input:PaginateOrdersInput){

    return this.orderService.paginateOrders(input);
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.remove(id);
  }

  @ResolveField(() => [OrderItem])
  items(@Parent() order:Order, @Context() { loaders } : { loaders:DataloaderRegistry } ){
    
    return loaders.OrderItemsDataLoader.load(order.id);
  }
}
