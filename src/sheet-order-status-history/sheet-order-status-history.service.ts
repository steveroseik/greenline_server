import { Injectable } from '@nestjs/common';
import { CreateSheetOrderStatusHistoryInput } from './dto/create-sheet-order-status-history.input';
import { UpdateSheetOrderStatusHistoryInput } from './dto/update-sheet-order-status-history.input';

@Injectable()
export class SheetOrderStatusHistoryService {
  create(createSheetOrderStatusHistoryInput: CreateSheetOrderStatusHistoryInput) {
    return 'This action adds a new sheetOrderStatusHistory';
  }

  findAll() {
    return `This action returns all sheetOrderStatusHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sheetOrderStatusHistory`;
  }

  update(id: number, updateSheetOrderStatusHistoryInput: UpdateSheetOrderStatusHistoryInput) {
    return `This action updates a #${id} sheetOrderStatusHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sheetOrderStatusHistory`;
  }
}
