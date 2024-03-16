import { Injectable } from '@nestjs/common';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './entities/expense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpenseService {

  constructor(@InjectRepository(Expense) private repo:Repository<Expense>){}

  async create(input: CreateExpenseInput): Promise<boolean> {
    try{
      
      const response = await this.repo.insert(input);
      if (response.raw.affectedRows === 1) return true;
      return false;
    }catch (e){
      return e;
    }
  }

  findAll() {
    return `This action returns all expense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseInput: UpdateExpenseInput) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
