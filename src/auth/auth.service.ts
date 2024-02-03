import {Injectable } from '@nestjs/common';
import { TokenRequestInput } from './dto/tokenRequest.input';
// import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Auth } from 'firebase-admin/auth';
import admin from 'src/main';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserTokenResponse } from 'src/compoundEntities/userLoginResponse.entity';
import { EmailValidityPayload } from 'src/compoundEntities/EmailValidity.entity';
import { gameInitSHA256 as hashToSHA256 } from './sha-encryption.method';
import { UserAndRoles } from 'src/compoundEntities/userAndRoles.entity';
import { TokenRefreshInput } from './dto/tokenRefresh.input';
import { ForbiddenError } from '@nestjs/apollo';
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

  async requestToken(tokenPayload: TokenRequestInput): Promise<UserTokenResponse | null> {

    try{
      const decoded = await this.firebaseAuth.verifyIdToken(tokenPayload.firebaseToken);
      if (decoded.email == null || decoded.email.length <= 0) throw Error('no_email_found')

    
      if (tokenPayload.id !== undefined){
        if (!(await this.userService.signUpAccount(tokenPayload.id, decoded.email, decoded.uid))){
          throw Error('failed_to_signup');
        }
      }

      const data = await this.userService.getUserWithRoles(decoded.uid);

      if (data.user === null) throw Error('invalid_user')

      const accessToken = this.jwtService.sign({
        id: data.user.id,
        hubId: data.user.hubId,
        type: data.user.type,
        merchantId: data.user.merchantId,
        roles: data.roles.map((role) => role.roleId),
      },{expiresIn: '30m', secret: this.configService.get('access_token_secret')});

      let refreshToken = this.jwtService.sign({
            id: data.user.id,
            email: data.user.email,
          },{expiresIn: '10d',  secret: this.configService.get('refresh_token_secret')});


      //TODO: Fix refresh token cannot get reused due to hashing
      if (!(await this.userService.saveRefreshToken(decoded.email, hashToSHA256(refreshToken)))){
        throw Error('failed_to_update_refreshToken')
      }
      // if (data.user.refreshToken === undefined || 
      //   data.user.refreshToken === null || 
      //   data.user.refreshToken?.length === 0){

          
      // }

      return {
        user: data.user,
        userRoles: data.roles,
        accessToken,
        refreshToken
      }

    }catch (e){
      // TODO: fix no errors shown except last
      console.log(e);
      if (e == 'no_email_found' || 
      e == 'failed_to_update_refreshToken'
      || e == 'failed_to_signup'){
        throw Error(e);
      }
      // last
      throw Error('failed_to_analyse_token');
    }
  }


  //TODO: update to secure with firebase token verification
  async getNewToken(payload:TokenRefreshInput): Promise<UserTokenResponse | null>{
    try{
      const decoded = await this.firebaseAuth.verifyIdToken(payload.token);
      if (decoded.email == null || decoded.email.length <= 0) throw Error('no_email_found')

      const data = await this.userService.getUserWithRoles(decoded.uid);

      if (data == null) return null;

      if (data.user.refreshToken == null) return null;

      if (data.user.refreshToken !== hashToSHA256(payload.refreshToken)) return null;

       const accessToken = this.jwtService.sign({
        id: data.user.id,
        email: data.user.email,
        roles: data.roles.map((role) => role.roleId),
      },{expiresIn: '30m', secret: this.configService.get('access_token_secret')});

      return {
        user: data.user,
        userRoles: data.roles,
        accessToken,
        refreshToken: payload.refreshToken
      }
    }catch (e){
      console.log(e);
      throw new ForbiddenError('Unauthorized');
    }
  }

  async isEmailValid(email:string): Promise<EmailValidityPayload>{

    const data = await this.userService.findOneByEmail(email);
  
    if (data !== null){
      if (data.id.length === 7){
        return {
          isValid: true,
          id: data.id,
        }
      }
      return {
        isValid: true,
      }
    }

    return {
      isValid: false
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
