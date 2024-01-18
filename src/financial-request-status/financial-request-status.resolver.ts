import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancialRequestStatusService } from './financial-request-status.service';
import { FinancialRequestStatus } from './entities/financial-request-status.entity';
import { CreateFinancialRequestStatusInput } from './dto/create-financial-request-status.input';
import { UpdateFinancialRequestStatusInput } from './dto/update-financial-request-status.input';

@Resolver(() => FinancialRequestStatus)
export class FinancialRequestStatusResolver {
  constructor(private readonly financialRequestStatusService: FinancialRequestStatusService) {}

  @Mutation(() => FinancialRequestStatus)
  createFinancialRequestStatus(@Args('createFinancialRequestStatusInput') createFinancialRequestStatusInput: CreateFinancialRequestStatusInput) {
    return this.financialRequestStatusService.create(createFinancialRequestStatusInput);
  }

  @Query(() => [FinancialRequestStatus], { name: 'financialRequestStatus' })
  findAll() {
    return this.financialRequestStatusService.findAll();
  }

  @Query(() => FinancialRequestStatus, { name: 'financialRequestStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.financialRequestStatusService.findOne(id);
  }

  @Mutation(() => FinancialRequestStatus)
  updateFinancialRequestStatus(@Args('updateFinancialRequestStatusInput') updateFinancialRequestStatusInput: UpdateFinancialRequestStatusInput) {
    return this.financialRequestStatusService.update(updateFinancialRequestStatusInput.id, updateFinancialRequestStatusInput);
  }

  @Mutation(() => FinancialRequestStatus)
  removeFinancialRequestStatus(@Args('id', { type: () => Int }) id: number) {
    return this.financialRequestStatusService.remove(id);
  }
}
