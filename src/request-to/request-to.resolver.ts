import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RequestToService } from './request-to.service';
import { RequestTo } from './entities/request-to.entity';
import { CreateRequestToInput } from './dto/create-request-to.input';
import { UpdateRequestToInput } from './dto/update-request-to.input';

@Resolver(() => RequestTo)
export class RequestToResolver {
  constructor(private readonly requestToService: RequestToService) {}

  @Mutation(() => RequestTo)
  createRequestTo(@Args('createRequestToInput') createRequestToInput: CreateRequestToInput) {
    return this.requestToService.create(createRequestToInput);
  }

  @Query(() => [RequestTo], { name: 'requestTo' })
  findAll() {
    return this.requestToService.findAll();
  }

  @Query(() => RequestTo, { name: 'requestTo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestToService.findOne(id);
  }

  @Mutation(() => RequestTo)
  updateRequestTo(@Args('updateRequestToInput') updateRequestToInput: UpdateRequestToInput) {
    return this.requestToService.update(updateRequestToInput.id, updateRequestToInput);
  }

  @Mutation(() => RequestTo)
  removeRequestTo(@Args('id', { type: () => Int }) id: number) {
    return this.requestToService.remove(id);
  }
}
