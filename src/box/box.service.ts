import { Injectable } from '@nestjs/common';
import { CreateBoxInput } from './dto/create-box.input';
import { UpdateBoxInput } from './dto/update-box.input';

@Injectable()
export class BoxService {
  create(createBoxInput: CreateBoxInput) {
    return 'This action adds a new box';
  }

  findAll() {
    return `This action returns all box`;
  }

  findOne(id: number) {
    return `This action returns a #${id} box`;
  }

  update(id: number, updateBoxInput: UpdateBoxInput) {
    return `This action updates a #${id} box`;
  }

  remove(id: number) {
    return `This action removes a #${id} box`;
  }
}
