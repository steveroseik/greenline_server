import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancialAccountService } from './financial-account.service';
import { FinancialAccount } from './entities/financial-account.entity';
import { CreateFinancialAccountInput } from './dto/create-financial-account.input';
import { UpdateFinancialAccountInput } from './dto/update-financial-account.input';

@Resolver(() => FinancialAccount)
export class FinancialAccountResolver {
  constructor(private readonly financialAccountService: FinancialAccountService) {}

  @Mutation(() => FinancialAccount)
  createFinancialAccount(@Args('createFinancialAccountInput') createFinancialAccountInput: CreateFinancialAccountInput) {
    return this.financialAccountService.create(createFinancialAccountInput);
  }

  @Query(() => [FinancialAccount], { name: 'financialAccount' })
  findAll() {
    return this.financialAccountService.findAll();
  }

  @Query(() => FinancialAccount, { name: 'financialAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.financialAccountService.findOne(id);
  }

  @Mutation(() => FinancialAccount)
  updateFinancialAccount(@Args('updateFinancialAccountInput') updateFinancialAccountInput: UpdateFinancialAccountInput) {
    return this.financialAccountService.update(updateFinancialAccountInput.id, updateFinancialAccountInput);
  }

  @Mutation(() => FinancialAccount)
  removeFinancialAccount(@Args('id', { type: () => Int }) id: number) {
    return this.financialAccountService.remove(id);
  }
}
