import { Injectable } from '@nestjs/common';
import { SendTransactionInput } from './dto/send-transaction.input';
import { UpdateFinancialTransactionInput } from './dto/update-financial-transaction.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialTransaction } from './entities/financial-transaction.entity';
import { In, Repository } from 'typeorm';
import { FinancialTransactionPaginationInput } from './dto/financial-transaction-pagination.input';
import { buildPaginator } from 'typeorm-cursor-pagination';

@Injectable()
export class FinancialTransactionService {

  constructor(@InjectRepository(FinancialTransaction) private repo:Repository<FinancialTransaction>){}


  create(createFinancialTransactionInput: SendTransactionInput) {
    return 'This action adds a new financialTransaction';
  }

  paginate(input:FinancialTransactionPaginationInput){

    let queryBuilder = this.repo.createQueryBuilder();
    let whereSet = false

    if (input.fromAccountId !== null ){
      queryBuilder = queryBuilder.where({ fromAccountId: In([input.fromAccountId])})
      whereSet = true;
    }

    if (input.toAccountId !== null ){
     if (whereSet){
        queryBuilder = queryBuilder.orWhere({ toAccountId: In([input.toAccountId])})
     }else{
        queryBuilder = queryBuilder.where({ toAccountId: In([input.toAccountId])})
        whereSet = true;
     }
    }

     if (input.status !== null ){
     if (whereSet){
        queryBuilder = queryBuilder.andWhere({ status: In([input.status])})
     }else{
        queryBuilder = queryBuilder.where({ status: In([input.status])})
        whereSet = true;
     }
    }

     if (input.type !== null ){
     if (whereSet){
        queryBuilder = queryBuilder.andWhere({ type: In([input.type])})
     }else{
        queryBuilder = queryBuilder.where({ type: In([input.type])})
        whereSet = true;
     }
    }

    const paginator = buildPaginator({
      entity: FinancialTransaction,
      paginationKeys: input.byId ? ['id'] : ['createdAt'],
      query: {
        order: input.isAsc ? "ASC" : "DESC",
        limit: input.limit?? 10,
        afterCursor: input.afterCursor,
        beforeCursor: input.beforeCursor
      }
    })

    return paginator.paginate(queryBuilder);

  }

  findAll() {
    return `This action returns all financialTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialTransaction`;
  }

  update(id: number, updateFinancialTransactionInput: UpdateFinancialTransactionInput) {
    return `This action updates a #${id} financialTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialTransaction`;
  }
}
