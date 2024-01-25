import { Injectable } from '@nestjs/common';
import { CreateUserRoleInput } from './dto/create-user-role.input';
import { UpdateUserRoleInput } from './dto/update-user-role.input';
import { UserRole } from './entities/user-role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class UserRoleService {


  constructor(@InjectRepository(UserRole) private userRoleRepo:Repository<UserRole> ){}

  create(createUserRoleInput: CreateUserRoleInput) {
    return 'This action adds a new userRole';
  }


  async findAllUserRoles(keys: readonly string[]): Promise<UserRole[]>{

    return await this.userRoleRepo.find({where: {userId: In(keys)}});
  }

  async getRolesById(uid:string): Promise<UserRole[]>{

    return await this.userRoleRepo.find({where: {userId: uid}});
  }

  findAll() {
    return `This action returns all userRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRole`;
  }

  update(id: number, updateUserRoleInput: UpdateUserRoleInput) {
    return `This action updates a #${id} userRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRole`;
  }
}
