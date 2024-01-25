import {Injectable } from '@nestjs/common';
import { TokenRequestInput } from './dto/sign-in.input';
import { UpdateAuthInput } from './dto/sign-up.input';
// import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Auth } from 'firebase-admin/auth';
import admin from 'src/main';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
// import admin from "../main";

@Injectable()
export class AuthService {
// private jwtService:JwtService,
  

  private firebaseAuth:Auth;

  constructor( private configService:ConfigService, private userService:UserService){
    this.firebaseAuth = admin.auth();
  }

  async requestToken(tokenPayload: TokenRequestInput): Promise<User | null> {

    try{
      // const decoded = await this.firebaseAuth.verifyIdToken(tokenPayload.token);
      const userData = this.userService.getUserDataWithRoles('btLckRA');

      return userData;

    }catch (e){
      return e;
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
