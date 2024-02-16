import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancialTransactionService } from './financial-transaction.service';
import { FinancialTransaction } from './entities/financial-transaction.entity';
import { CreateFinancialTransactionInput } from './dto/create-financial-transaction.input';
import { UpdateFinancialTransactionInput } from './dto/update-financial-transaction.input';
import { FinancialTransactionPaginationInput } from './dto/financial-transaction-pagination.input';
import { FinancialTransactionPage } from './entities/financial-transaction-page';

@Resolver(() => FinancialTransaction)
export class FinancialTransactionResolver {
  constructor(private readonly financialTransactionService: FinancialTransactionService) {}

  @Mutation(() => FinancialTransaction)
  createFinancialTransaction(@Args('createFinancialTransactionInput') createFinancialTransactionInput: CreateFinancialTransactionInput) {
    return this.financialTransactionService.create(createFinancialTransactionInput);
  }

  
  @Query(() => [FinancialTransactionPage])
  paginateFinancialTransaction(@Args('input') input:FinancialTransactionPaginationInput){

    return this.financialTransactionService.paginate(input);
  }

  @Query(() => FinancialTransaction, { name: 'financialTransaction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.financialTransactionService.findOne(id);
  }

  @Mutation(() => FinancialTransaction)
  updateFinancialTransaction(@Args('updateFinancialTransactionInput') updateFinancialTransactionInput: UpdateFinancialTransactionInput) {
    return this.financialTransactionService.update(updateFinancialTransactionInput.id, updateFinancialTransactionInput);
  }

  @Mutation(() => FinancialTransaction)
  removeFinancialTransaction(@Args('id', { type: () => Int }) id: number) {
    return this.financialTransactionService.remove(id);
  }
}
