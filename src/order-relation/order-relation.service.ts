import { Injectable } from '@nestjs/common';
import { CreateOrderRelationInput } from './dto/create-order-relation.input';
import { UpdateOrderRelationInput } from './dto/update-order-relation.input';

@Injectable()
export class OrderRelationService {
  create(createOrderRelationInput: CreateOrderRelationInput) {
    return 'This action adds a new orderRelation';
  }

  findAll() {
    return `This action returns all orderRelation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderRelation`;
  }

  update(id: number, updateOrderRelationInput: UpdateOrderRelationInput) {
    return `This action updates a #${id} orderRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderRelation`;
  }
}
