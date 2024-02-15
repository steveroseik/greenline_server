import { Injectable } from '@nestjs/common';
import { CreateSheetOrderInput } from './dto/create-sheet-order.input';
import { UpdateSheetOrderInput } from './dto/update-sheet-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { In, QueryRunner, Repository } from 'typeorm';
import { SheetOrder } from './entities/sheet-order.entity';

@Injectable()
export class SheetOrderService {


  constructor(@InjectRepository(SheetOrder) private repo:Repository<SheetOrder>){}

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

  update(id: number, updateSheetOrderInput: UpdateSheetOrderInput) {
    return `This action updates a #${id} sheetOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} sheetOrder`;
  }
}
