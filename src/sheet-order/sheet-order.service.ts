import { Injectable } from '@nestjs/common';
import { CreateSheetOrderInput } from './dto/create-sheet-order.input';
import { UpdateSheetOrderInput } from './dto/update-sheet-order.input';

@Injectable()
export class SheetOrderService {
  create(createSheetOrderInput: CreateSheetOrderInput) {
    return 'This action adds a new sheetOrder';
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
