import { Injectable } from '@nestjs/common';
import { CreateOrderStatusInput } from './dto/create-order-status.input';
import { UpdateOrderStatusInput } from './dto/update-order-status.input';

@Injectable()
export class OrderStatusService {
  create(createOrderStatusInput: CreateOrderStatusInput) {
    return 'This action adds a new orderStatus';
  }

  findAll() {
    return `This action returns all orderStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderStatus`;
  }

  update(id: number, updateOrderStatusInput: UpdateOrderStatusInput) {
    return `This action updates a #${id} orderStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderStatus`;
  }
}
