import { Injectable } from '@nestjs/common';
import { CreateUserAddressInput } from './dto/create-user-address.input';
import { UpdateUserAddressInput } from './dto/update-user-address.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from './entities/user-address.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UserAddressService {

  constructor(@InjectRepository(UserAddress) private repo:Repository<UserAddress>){}


  create(createUserAddressInput: CreateUserAddressInput) {
    return 'This action adds a new userAddress';
  }

  findAddressesById(keys: readonly string[]){

    return this.repo.find({where: {userId: In(keys)}});
  }

  findAll() {
    return `This action returns all userAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAddress`;
  }

  update(id: number, updateUserAddressInput: UpdateUserAddressInput) {
    return `This action updates a #${id} userAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAddress`;
  }
}
