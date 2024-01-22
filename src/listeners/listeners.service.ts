import { Injectable } from '@nestjs/common';
import { CreateListenerInput } from './dto/create-listener.input';
import { UpdateListenerInput } from './dto/update-listener.input';

@Injectable()
export class ListenersService {
  create(createListenerInput: CreateListenerInput) {
    return 'This action adds a new listener';
  }

  findAll() {
    return `This action returns all listeners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listener`;
  }

  update(id: number, updateListenerInput: UpdateListenerInput) {
    return `This action updates a #${id} listener`;
  }

  remove(id: number) {
    return `This action removes a #${id} listener`;
  }
}
