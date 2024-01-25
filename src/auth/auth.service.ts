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
import { JwtService } from '@nestjs/jwt';
import { UserLoginResponse } from 'src/compoundEntities/userLoginResponse.entity';
// import admin from "../main";

@Injectable()
export class AuthService {
// private jwtService:JwtService,
  

  private firebaseAuth:Auth;

  constructor( private configService:ConfigService, 
    private userService:UserService,
    private jwtService:JwtService){
    this.firebaseAuth = admin.auth();
  }

  async requestToken(tokenPayload: TokenRequestInput): Promise<UserLoginResponse | null> {

    try{
      // const decoded = await this.firebaseAuth.verifyIdToken(tokenPayload.token);
      const data = await this.userService.getUserDataWithRoles('btLckRA');

      console.log(this.configService.get('access_token_secret'));
      const accessToken = this.jwtService.sign({
        id: data.user.id,
        email: data.user.email,
        roles: data.roles.map((role) => role.roleId),
      },{expiresIn: '30m', secret: this.configService.get('access_token_secret')});

      const refreshToken = this.jwtService.sign({
        id: data.user.id,
        email: data.user.email,
        roles: data.roles.map((role) => role.roleId),
      },{expiresIn: '10d',  secret: this.configService.get('refresh_token_secret')});
      
      return {
        user: data.user,
        userRoles: data.roles,
        accessToken,
        refreshToken
      }

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
