import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderRelationService } from './order-relation.service';
import { OrderRelation } from './entities/order-relation.entity';
import { CreateOrderRelationInput } from './dto/create-order-relation.input';
import { UpdateOrderRelationInput } from './dto/update-order-relation.input';

@Resolver(() => OrderRelation)
export class OrderRelationResolver {
  constructor(private readonly orderRelationService: OrderRelationService) {}

  @Mutation(() => OrderRelation)
  createOrderRelation(@Args('createOrderRelationInput') createOrderRelationInput: CreateOrderRelationInput) {
    return this.orderRelationService.create(createOrderRelationInput);
  }

  @Query(() => [OrderRelation], { name: 'orderRelation' })
  findAll() {
    return this.orderRelationService.findAll();
  }

  @Query(() => OrderRelation, { name: 'orderRelation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderRelationService.findOne(id);
  }

  @Mutation(() => OrderRelation)
  updateOrderRelation(@Args('updateOrderRelationInput') updateOrderRelationInput: UpdateOrderRelationInput) {
    return this.orderRelationService.update(updateOrderRelationInput.id, updateOrderRelationInput);
  }

  @Mutation(() => OrderRelation)
  removeOrderRelation(@Args('id', { type: () => Int }) id: number) {
    return this.orderRelationService.remove(id);
  }
}
