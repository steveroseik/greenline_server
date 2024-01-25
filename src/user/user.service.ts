import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { genId } from 'support/random-uuid-generator';
import moment from 'moment';

@Injectable()
export class UserService {


  constructor(@InjectRepository(User) private userRepository:Repository<User>){};

  async create(createUserInput: CreateUserInput) {
    try {

        createUserInput.id = genId();
        createUserInput.createdAt = new Date();
        createUserInput.lastModified = createUserInput.createdAt;

        const newUser = await this.userRepository.insert(createUserInput)
      
        return newUser.raw.affectedRows === 1;
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new Error('User with that ID already exists.');
        } else {
          throw error;
        }
      }
  }


  async getUserDataWithRoles(userId:string): Promise<User | null>{

    return await this.userRepository.findOne({where: {id: userId}});
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
