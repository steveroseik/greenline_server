import { Injectable } from '@nestjs/common';
import { CreateRequestToInput } from './dto/create-request-to.input';
import { UpdateRequestToInput } from './dto/update-request-to.input';

@Injectable()
export class RequestToService {
  create(createRequestToInput: CreateRequestToInput) {
    return 'This action adds a new requestTo';
  }

  findAll() {
    return `This action returns all requestTo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestTo`;
  }

  update(id: number, updateRequestToInput: UpdateRequestToInput) {
    return `This action updates a #${id} requestTo`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestTo`;
  }
}
