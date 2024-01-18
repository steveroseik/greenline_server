import { Injectable } from '@nestjs/common';
import { CreateCourierSheetInput } from './dto/create-courier-sheet.input';
import { UpdateCourierSheetInput } from './dto/update-courier-sheet.input';

@Injectable()
export class CourierSheetService {
  create(createCourierSheetInput: CreateCourierSheetInput) {
    return 'This action adds a new courierSheet';
  }

  findAll() {
    return `This action returns all courierSheet`;
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
