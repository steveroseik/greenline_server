import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { DataSource, In, Repository } from 'typeorm';
import { PaginateOrdersInput } from './dto/paginate-orders.input';
import Paginator from 'typeorm-cursor-pagination/lib/Paginator';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { OrderItemService } from 'src/order-item/order-item.service';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order) private orderRepo:Repository<Order>,
    private dataSource:DataSource){}


  async create(input:CreateOrderInput) {
    
    const queryRunner = this.dataSource.createQueryRunner()

    await queryRunner.connect()

    await queryRunner.startTransaction();

    try{

      const result = await queryRunner.manager.insert(Order, {

        otherId: input.otherId,
        paymentType: input.paymentType,
        type: input.type,
        userId: input.userId,
        merchantId: input.merchantId,
        userAddressId: input.userAddressId,
        shippingPrice: input.shippingPrice,
        includesVat: input.includesVat,
        canOpen: input.canOpen,
        fragile: input.fragile,
        deliveryPart: input.deliveryPart,
      });

      if (result.raw.affectedRows === 1){
        
        const ordersResult = await queryRunner.manager
        .insert(OrderItem, [...(input.orderItems.map((item) => ({...item, orderId: result.raw.insertId})))]);

        if (ordersResult.raw.affectedRows === 1){
          await queryRunner.commitTransaction();
          return true;
        }
      }

      throw Error('Unable to complete transaction');

    }catch (e){
      await queryRunner.rollbackTransaction();
      return e;

    }finally{
      queryRunner.release();
    }
  }

  async paginateOrders(input:PaginateOrdersInput){

    let queryBuilder = this.orderRepo.createQueryBuilder('order');

    const paginator = buildPaginator({
      entity: Order,
      paginationKeys: ['createdAt'],
      query: {
          limit: input.limit,
        order: input.isAsc ? 'ASC' : 'DESC',
        beforeCursor: input.beforeCursor,
        afterCursor: input.afterCursor
      }
    })

    return await paginator.paginate(queryBuilder);

  }

  findOrdersById(keys: readonly number[]){

    return this.orderRepo.find({where: {id: In(keys)}})
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
