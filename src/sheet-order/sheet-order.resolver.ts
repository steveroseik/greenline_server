import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { SheetOrderService } from './sheet-order.service';
import { SheetOrder } from './entities/sheet-order.entity';
import { CreateSheetOrderInput } from './dto/create-sheet-order.input';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { Order } from 'src/order/entities/order.entity';
import { UpdateSheetOrdersInput } from './dto/update-sheet-orders.input';
import { CurrentUser } from 'src/auth/decorators/currentUserDecorator';

@Resolver(() => SheetOrder)
export class SheetOrderResolver {
  constructor(private readonly sheetOrderService: SheetOrderService) {}

  @Mutation(() => SheetOrder)
  createSheetOrder(@Args('createSheetOrderInput') createSheetOrderInput: CreateSheetOrderInput) {
    return this.sheetOrderService.create(createSheetOrderInput);
  }


  @Mutation(() => [SheetOrder])
  updateSheetOrders(@Args('input') input:UpdateSheetOrdersInput,
  @CurrentUser('id') userId:string ){

    return this.sheetOrderService.update(input, userId);
  }

  @Query(() => SheetOrder, { name: 'sheetOrder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sheetOrderService.findOne(id);
  }

  @Mutation(() => SheetOrder)
  removeSheetOrder(@Args('id', { type: () => Int }) id: number) {
    return this.sheetOrderService.remove(id);
  }

  @ResolveField(() => Order)
  info(@Parent() sheetOrder:SheetOrder,
  @Context() { loaders } : { loaders:DataloaderRegistry }){
    
    return loaders.OrdersDataLoader.load(sheetOrder.orderId);
  }
}
