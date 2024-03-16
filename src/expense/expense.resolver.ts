import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpenseService } from './expense.service';
import { Expense } from './entities/expense.entity';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  @Mutation(() => Expense)
  createExpense(@Args('input') input: CreateExpenseInput) {
    return this.expenseService.create(input);
  }

  @Query(() => [Expense], { name: 'expense' })
  findAll() {
    return this.expenseService.findAll();
  }

  @Query(() => Expense, { name: 'expense' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.expenseService.findOne(id);
  }

  @Mutation(() => Expense)
  updateExpense(@Args('updateExpenseInput') updateExpenseInput: UpdateExpenseInput) {
    return this.expenseService.update(updateExpenseInput.id, updateExpenseInput);
  }

  @Mutation(() => Expense)
  removeExpense(@Args('id', { type: () => Int }) id: number) {
    return this.expenseService.remove(id);
  }
}
