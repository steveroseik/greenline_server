import { Injectable } from '@nestjs/common';
import { UpdateUserRoleInputAdvanced } from './dto/update-user-role-advanced.input';
import { UserRole } from './entities/user-role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';
import { UpdateUserTypeInput } from 'src/user/dto/update-user-type.input';
import { UpdateUserInput } from 'src/user/dto/update-user.input';
import { UpdateUserRoleInput } from './dto/update-user-role.input.';

@Injectable()
export class UserRoleService {


  constructor(
    @InjectRepository(UserRole) private userRoleRepo:Repository<UserRole>, 
    private dataSource:DataSource
  ){}


  async findAllUserRoles(keys: readonly string[]): Promise<UserRole[]>{

    return await this.userRoleRepo.find({where: {userId: In(keys)}});
  }

  async findRolesById(uid:string): Promise<UserRole[]>{
    return await this.userRoleRepo.find({where: {userId: uid}});
  }

  findAll() {
    return `This action returns all userRole`;
  }

  async updateUserRoles(input:UpdateUserRoleInput): Promise<Boolean>{

    let success = false;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    
    try {
      // Delete existing roles
      if (input.rolesToRemove.length > 0) {
        await queryRunner.manager.delete(UserRole, { userId: input.id, roleId: In(input.rolesToRemove)});
      }
      // Create new roles
      if (input.rolesToAdd.length > 0) {
        const newRoles = input.rolesToAdd.map(roleId => ({ userId: input.id, roleId }));
        await queryRunner.manager.insert(UserRole, newRoles);
      }
      await queryRunner.commitTransaction();
      success = true; // Indicate success
    } catch (error) {
      console.error('Error updating user roles:', error);
      await queryRunner.rollbackTransaction();
    }finally{
      await queryRunner.release();
      return success;
    }
    
  }


  async updateUserRolesOptimized(input:UpdateUserRoleInputAdvanced): Promise<boolean> {

    let success = false;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // Get existing roles for the user
          const existingRoles = await queryRunner.manager.find(UserRole, { where: { userId: input.id } });
          const existingRoleIds = existingRoles.map(role => role.roleId);

          // Roles to add: new roles not in existing
          const rolesToAdd = input.roles.filter(roleId => !existingRoleIds.includes(roleId));
          // Roles to remove: existing roles not in new
          const rolesToRemove = existingRoleIds.filter(roleId => !input.roles.includes(roleId));

          // Create new roles
          if (rolesToAdd.length > 0) {
            const newRoles = rolesToAdd.map(roleId => ({ userId: input.id, roleId }));
            await queryRunner.manager.insert(UserRole, newRoles);
          }

          // Delete existing roles
          if (rolesToRemove.length > 0) {
            await queryRunner.manager.delete(UserRole, { userId: input.id, roleId: In(rolesToRemove)});
          }
        success = true; // Indicate success
      } catch (error) {
        console.error('Error updating user roles:', error);
        await queryRunner.rollbackTransaction();
      }finally{
        await queryRunner.release();
        return success;
      }
    }

  remove(id: number) {
    return `This action removes a #${id} userRole`;
  }
}
