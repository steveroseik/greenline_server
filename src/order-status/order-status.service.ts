import { Injectable } from '@nestjs/common';
import { CreateOrderStatusInput } from './dto/create-order-status.input';
import { UpdateOrderStatusInput } from './dto/update-order-status.input';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStatus } from './entities/order-status.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class OrderStatusService {


  constructor(@InjectRepository(OrderStatus) private repo:Repository<OrderStatus> ){}

  create(createOrderStatusInput: CreateOrderStatusInput) {
    return 'This action adds a new orderStatus';
  }

  findAll() {
    return `This action returns all orderStatus`;
  }

  findAllById(keys: readonly number[]){

    return this.repo.find({where: {orderId: In(keys)}})
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
