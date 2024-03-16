import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancialTransactionStatusService } from './financial-transaction-status.service';
import { FinancialTransactionStatus } from './entities/financial-transaction-status.entity';
import { CreateFinancialRequestStatusInput } from './dto/create-financial-transaction-status.input';
import { UpdateFinancialRequestStatusInput } from './dto/update-financial-transaction-status.input';

@Resolver(() => FinancialTransactionStatus)
export class FinancialTransactionStatusResolver {
  constructor(private readonly financialRequestStatusService: FinancialTransactionStatusService) {}

  @Mutation(() => FinancialTransactionStatus)
  createFinancialRequestStatus(@Args('createFinancialRequestStatusInput') createFinancialRequestStatusInput: CreateFinancialRequestStatusInput) {
    return this.financialRequestStatusService.create(createFinancialRequestStatusInput);
  }

  @Query(() => [FinancialTransactionStatus], { name: 'financialRequestStatus' })
  findAll() {
    return this.financialRequestStatusService.findAll();
  }

  @Query(() => FinancialTransactionStatus, { name: 'financialRequestStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.financialRequestStatusService.findOne(id);
  }

  @Mutation(() => FinancialTransactionStatus)
  updateFinancialRequestStatus(@Args('updateFinancialRequestStatusInput') updateFinancialRequestStatusInput: UpdateFinancialRequestStatusInput) {
    return this.financialRequestStatusService.update(updateFinancialRequestStatusInput.id, updateFinancialRequestStatusInput);
  }

  @Mutation(() => FinancialTransactionStatus)
  removeFinancialRequestStatus(@Args('id', { type: () => Int }) id: number) {
    return this.financialRequestStatusService.remove(id);
  }
}
