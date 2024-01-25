import { Injectable } from '@nestjs/common';
import { CreateRolesInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {


  constructor(@InjectRepository(Role) private roleRepo:Repository<Role>){}

  create(createRoleInput: CreateRolesInput) {
    return 'This action adds a new role';
  }

  findAll() {
    return this.roleRepo.find();
  }

  async findOne(id: number) {
    return await this.roleRepo.findOne({where: {id: id}})
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
