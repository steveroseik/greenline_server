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


@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User) private userRepository:Repository<User>,
    private userRoleService:UserRoleService){};

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

  findAll() {
    //TODO: Exhaustive, paginate
    return this.userRepository.find();
  }


  async saveRefreshToken(email:string, token:string): Promise<boolean>{

    const data = await this.userRepository.update({email}, {refreshToken: token});
    if (data.affected === 1) return true;

    return false;
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userRepository.findOne({where: {id}})
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({where: {email}})
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
