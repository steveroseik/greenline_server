import { Injectable } from '@nestjs/common';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class OrderItemService {

  constructor(@InjectRepository(OrderItem) private repo:Repository<OrderItem>){}


  create(createOrderItemInput: CreateOrderItemInput) {
    return 'This action adds a new orderItem';
  }

  findAll() {
    return `This action returns all orderItem`;
  }

  async findFromOrderId(keys: readonly number[]){
    return await this.repo.find({where: {orderId: In(keys)}});
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemInput: UpdateOrderItemInput) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
