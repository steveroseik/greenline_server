import { Injectable } from '@nestjs/common';
import { CreateHubInput } from './dto/create-hub.input';
import { UpdateHubInput } from './dto/update-hub.input';

@Injectable()
export class HubService {
  create(createHubInput: CreateHubInput) {
    return 'This action adds a new hub';
  }

  findAll() {
    return `This action returns all hub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hub`;
  }

  update(id: number, updateHubInput: UpdateHubInput) {
    return `This action updates a #${id} hub`;
  }

  remove(id: number) {
    return `This action removes a #${id} hub`;
  }
}
