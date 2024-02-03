import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { genId } from 'support/random-uuid-generator';
import moment from 'moment';
import { UserRoleService } from 'src/user-role/user-role.service';
import { UserTokenResponse } from 'src/compoundEntities/userLoginResponse.entity';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { UserAndRoles } from 'src/compoundEntities/userAndRoles.entity';
import { Roles } from 'src/auth/decorators/RolesDecorator';
import { UserPageInput } from './dto/user-page.input';
import { buildPaginator } from 'typeorm-cursor-pagination';
import { UserPage } from './entities/userPage.entity';
import { UpdateUserInfo } from './dto/update-info.input';
import { UpdateUserTypeInput } from './dto/update-user-type.input';


@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User) private userRepository:Repository<User>,
    private userRoleService:UserRoleService){};

  async create(createUserInput: CreateUserInput) {
    try {

        createUserInput.id = genId();

        const newUser = await this.userRepository.insert(createUserInput)
      
        return newUser.raw.affectedRows === 1;
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new Error('User already exist');
        } else {
          throw error;
        }
      }
  }


  async getUserWithRoles(userId:string): Promise<UserAndRoles| null>{

    const userDataPromise = this.findOne(userId);
    const rolesDataPromise = this.userRoleService.findRolesById(userId);

    const [userData, rolesData] = await Promise.all([userDataPromise, rolesDataPromise]);

     const res = {
      user: userData,
      roles: rolesData
     };
     console.log(res);
     return res;
  }

  async signUpAccount(oldId:string, email:string, id:string): Promise<boolean>{

    try{
      const data = await this.userRepository.update({id:oldId, email}, {id});
      if (data.affected === 1) return true;
    }catch(e){
      console.log(e);
    }

    return false;
  }


  async setRefreshToken(token:string){
    const resp = await this.userRepository.insert({refreshToken: token})
  }

  paginateUsers(input:UserPageInput): Promise<UserPage>{
    
    let query = this.userRepository.createQueryBuilder('user')

    const paginator = buildPaginator({
      entity: User,
      paginationKeys: ['id'],
      query: {
        order: input.isAsc ? 'ASC' : "DESC",
        limit: input.limit,
        afterCursor: input.afterCursor,
        beforeCursor: input.beforeCursor
      }
    })

    if (input.roles.includes(Roles.admin)) {
      // do nothing, get all
    }else if (input.roles.includes(Roles.courierAdmin) || input.type == 'courier'){
      query.where("user.type = 'courier'");
    }else if (input.roles.includes(Roles.financeAdmin) || input.type == 'finance'){
      query.where("user.type = 'finance'");
    }else if (input.roles.includes(Roles.merchantAdmin) || input.type == 'merchant'){
      query.where("user.type = 'merchant'");
    }else if (input.roles.includes(Roles.inventoryAdmin) || input.type == 'inventory'){
      query.where("user.type = 'inventory'");
    }

    return paginator.paginate(query);

  }


  async saveRefreshToken(email:string, token:string): Promise<boolean>{

    const data = await this.userRepository.update({email}, {refreshToken: token});
    if (data.affected === 1) return true;

    return false;
  }

  async updateUserType(input:UpdateUserTypeInput): Promise<Boolean>{

    const resp = await this.userRepository.update({id: input.id}, {type: input.type})

    return resp.affected === 1;
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userRepository.findOne({where: {id}})
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({where: {email}})
  }

  async updateMyInfo(input:UpdateUserInfo): Promise<Boolean> {
    const resp = await this.userRepository.update(input.id, input);
    return resp.affected === 1
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
