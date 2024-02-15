import { Injectable } from '@nestjs/common';
import { CreateCourierSheetInput } from './dto/create-courier-sheet.input';
import { UpdateCourierSheetInput } from './dto/update-courier-sheet.input';
import { InjectRepository } from '@nestjs/typeorm';
import { CourierSheet } from './entities/courier-sheet.entity';
import { DataSource, LessThan, MoreThan, MoreThanOrEqual, Repository, Not} from 'typeorm';
import { SheetOrderService } from 'src/sheet-order/sheet-order.service';
import { PaginateCourierSheetInput } from './dto/paginate-courier-sheet.input';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { CourierSheetStatus } from 'support/enums';

@Injectable()
export class CourierSheetService {

  constructor(
    @InjectRepository(CourierSheet) private repo:Repository<CourierSheet>,
    private sheetOrderService:SheetOrderService,
    private dataSource:DataSource){}
  
  async create(input: CreateCourierSheetInput) {
    
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try{

      const res = await this.repo.find({where: {userId: input.userId, status: Not(CourierSheetStatus.complete)}})

      if (res.length === 0){

        const newSheet = await queryRunner.manager.insert(CourierSheet, {
          userId: input.userId,
        });

        if (newSheet.raw.affectedRows === 1){

          return await this.sheetOrderService
          .createSheetOrders(input.orderIds, newSheet.raw.insertId, queryRunner);
        }

      }

      throw Error("Open Sheet")
      
    }catch (e){

      await queryRunner.rollbackTransaction();
      return e;
    }finally{
      queryRunner.release();
    }
  }

  async findAll() {
    
    // return this.repo.find({relations: {sheetOrders: true}});
    const res = await this.repo.createQueryBuilder('courierSheet')
    .leftJoinAndSelect('courierSheet.sheetOrders', 'sheetOrders').execute();

    console.log(res);
    return res;
  }

  paginateById(input:PaginateCourierSheetInput){

    const queryBuilder = this.repo.createQueryBuilder('courierSheet')
    // .leftJoinAndSelect('courierSheet.sheetOrders', 'sheetOrders');

    const paginator = buildPaginator({
      entity: CourierSheet,
      paginationKeys: ['id'],
      query: {
        limit: input.limit,
        order: input.isAsc ? 'ASC' : 'DESC',
        beforeCursor: input.beforeCursor,
        afterCursor: input.afterCursor
      }
    })

    return paginator.paginate(queryBuilder);

  }

  findOne(id: number) {
    return `This action returns a #${id} courierSheet`;
  }

  update(id: number, updateCourierSheetInput: UpdateCourierSheetInput) {
    return `This action updates a #${id} courierSheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} courierSheet`;
  }
}
