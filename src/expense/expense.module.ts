import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseResolver } from './expense.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpenseResolver, ExpenseService],
  exports: [ExpenseService]
})
export class ExpenseModule {}
