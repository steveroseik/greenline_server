import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RequestStatusHistoryService } from './request-status-history.service';
import { RequestStatusHistory } from './entities/request-status-history.entity';
import { CreateRequestStatusHistoryInput } from './dto/create-request-status-history.input';
import { UpdateRequestStatusHistoryInput } from './dto/update-request-status-history.input';

@Resolver(() => RequestStatusHistory)
export class RequestStatusHistoryResolver {
  constructor(private readonly requestStatusHistoryService: RequestStatusHistoryService) {}

  @Mutation(() => RequestStatusHistory)
  createRequestStatusHistory(@Args('createRequestStatusHistoryInput') createRequestStatusHistoryInput: CreateRequestStatusHistoryInput) {
    return this.requestStatusHistoryService.create(createRequestStatusHistoryInput);
  }

  @Query(() => [RequestStatusHistory], { name: 'requestStatusHistory' })
  findAll() {
    return this.requestStatusHistoryService.findAll();
  }

  @Query(() => RequestStatusHistory, { name: 'requestStatusHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestStatusHistoryService.findOne(id);
  }

  @Mutation(() => RequestStatusHistory)
  updateRequestStatusHistory(@Args('updateRequestStatusHistoryInput') updateRequestStatusHistoryInput: UpdateRequestStatusHistoryInput) {
    return this.requestStatusHistoryService.update(updateRequestStatusHistoryInput.id, updateRequestStatusHistoryInput);
  }

  @Mutation(() => RequestStatusHistory)
  removeRequestStatusHistory(@Args('id', { type: () => Int }) id: number) {
    return this.requestStatusHistoryService.remove(id);
  }
}
