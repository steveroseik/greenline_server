import { Injectable } from '@nestjs/common';
import { CreateRequestStatusHistoryInput } from './dto/create-request-status-history.input';
import { UpdateRequestStatusHistoryInput } from './dto/update-request-status-history.input';

@Injectable()
export class RequestStatusHistoryService {
  create(createRequestStatusHistoryInput: CreateRequestStatusHistoryInput) {
    return 'This action adds a new requestStatusHistory';
  }

  findAll() {
    return `This action returns all requestStatusHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestStatusHistory`;
  }

  update(id: number, updateRequestStatusHistoryInput: UpdateRequestStatusHistoryInput) {
    return `This action updates a #${id} requestStatusHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestStatusHistory`;
  }
}
