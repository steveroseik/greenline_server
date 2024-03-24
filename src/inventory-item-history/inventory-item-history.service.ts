import { Injectable } from '@nestjs/common';
import { CreateInventoryItemHistoryInput } from './dto/create-inventory-item-history.input';
import { UpdateInventoryItemHistoryInput } from './dto/update-inventory-item-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryItemHistory } from './entities/inventory-item-history.entity';
import { Repository } from 'typeorm';
import { PaginateItemHistoryInput } from './dto/paginateItemHistory.input';
import { buildPaginator } from 'typeorm-cursor-pagination';

@Injectable()
export class InventoryItemHistoryService {


  constructor(@InjectRepository(InventoryItemHistory) private readonly historyRepo:Repository<InventoryItemHistory>){}

  create(createInventoryHistoryInput: CreateInventoryItemHistoryInput) {
    return 'This action adds a new inventoryHistory';
  }

  async createHistory(input:CreateInventoryItemHistoryInput){

    const result = await this.historyRepo.insert(input);

    return result.raw.affectedRows === 1;
  }



  paginateItemHistory(input: PaginateItemHistoryInput){

    let queryBuilder = this.historyRepo.createQueryBuilder()
    .where({itemInBoxId: input.itemInBoxId});

    const paginator = buildPaginator({
      entity: InventoryItemHistory,
      paginationKeys: ['createdAt'],
      query: {
        limit: input.limit,
        order: 'DESC',
        beforeCursor: input.beforeCursor,
        afterCursor: input.afterCursor
      },
    })

    return paginator.paginate(queryBuilder);
  }


  findAll() {
    return `This action returns all inventoryHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryHistory`;
  }

  update(id: number, updateInventoryHistoryInput: UpdateInventoryItemHistoryInput) {
    return `This action updates a #${id} inventoryHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryHistory`;
  }
}
