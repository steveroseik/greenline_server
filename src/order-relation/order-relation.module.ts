import { Module } from '@nestjs/common';
import { OrderRelationService } from './order-relation.service';
import { OrderRelationResolver } from './order-relation.resolver';

@Module({
  providers: [OrderRelationResolver, OrderRelationService],
})
export class OrderRelationModule {}
