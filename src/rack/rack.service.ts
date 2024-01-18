import { Injectable } from '@nestjs/common';
import { CreateRackInput } from './dto/create-rack.input';
import { UpdateRackInput } from './dto/update-rack.input';

@Injectable()
export class RackService {
  create(createRackInput: CreateRackInput) {
    return 'This action adds a new rack';
  }

  findAll() {
    return `This action returns all rack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rack`;
  }

  update(id: number, updateRackInput: UpdateRackInput) {
    return `This action updates a #${id} rack`;
  }

  remove(id: number) {
    return `This action removes a #${id} rack`;
  }
}
