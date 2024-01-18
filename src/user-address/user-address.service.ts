import { Injectable } from '@nestjs/common';
import { CreateUserAddressInput } from './dto/create-user-address.input';
import { UpdateUserAddressInput } from './dto/update-user-address.input';

@Injectable()
export class UserAddressService {
  create(createUserAddressInput: CreateUserAddressInput) {
    return 'This action adds a new userAddress';
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
