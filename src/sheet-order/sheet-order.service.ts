import { Injectable } from '@nestjs/common';
import { CreateSheetOrderInput } from './dto/create-sheet-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import {DataSource, In, QueryRunner, Repository } from 'typeorm';
import { SheetOrder } from './entities/sheet-order.entity';
import { UpdateSheetOrdersInput } from './dto/update-sheet-orders.input';
import { SheetOrderStatus } from 'support/enums';
import { SheetOrderStatusHistory } from 'src/sheet-order-status-history/entities/sheet-order-status-history.entity';

@Injectable()
export class SheetOrderService {


  constructor(@InjectRepository(SheetOrder) private repo:Repository<SheetOrder>,
  private dataSource:DataSource){}

  create(createSheetOrderInput: CreateSheetOrderInput) {
    return 'This action adds a new sheetOrder';
  }

  async createSheetOrders(orderIds: number[], sheetId: number, queryRunner:QueryRunner){


    const sheetOrders = orderIds.map((orderId) => ({
      orderId,
      sheetId,
    }));

    try{
      const result = await queryRunner.manager.insert(SheetOrder, sheetOrders);
      if (result.raw.affectedRows === orderIds.length){

        await queryRunner.commitTransaction();
        return true;
      }

      throw Error('Failed to add orders');

    }catch (e){
    
      return e;
    }
  }

  findOrdersBySheet(keys: readonly number[]){

    return this.repo.find({where: {sheetId: In(keys)}})
  }

  findAll() {
    return `This action returns all sheetOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sheetOrder`;
  }

  async update(input: UpdateSheetOrdersInput, userId: string) {
   const queryRunner = this.dataSource.createQueryRunner();
   
   await queryRunner.connect();
   await queryRunner.startTransaction();
   
   try{

    let adminPass = false;
    let financePass = false;

    if (input.status === SheetOrderStatus.adminAccepted){
      adminPass = true;
    }
    if (input.status === SheetOrderStatus.financeAccepted){
      financePass = true;
    }
    const result = await queryRunner.manager
    .update(SheetOrder, {id: In(input.sheetOrderIds)}, {adminPass, financePass});

    if (result.raw.affectedRows === input.sheetOrderIds.length){

      const historyResults = await queryRunner.manager
      .insert(SheetOrderStatusHistory, input.sheetOrderIds.map((id) => ({
         userId,
         sheetOrderId: id,
         description: input.description,
         status: input.status
      })))

      if (historyResults.raw.affectedRows === input.sheetOrderIds.length){

        await queryRunner.commitTransaction();
        return true;
      }
      throw Error('failed to insert history for ids');
    }

    throw Error('failed to update ids');
    

   }catch (e){
    await queryRunner.rollbackTransaction();
    return e;

   }finally{
    queryRunner.release();
   }
  }

  remove(id: number) {
    return `This action removes a #${id} sheetOrder`;
  }
}
