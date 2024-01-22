import { Injectable } from '@nestjs/common';
import { TokenRequestInput } from './dto/sign-in.input';
import { UpdateAuthInput } from './dto/sign-up.input';
// import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import admin from "../main";

@Injectable()
export class AuthService {
// private jwtService:JwtService,
  constructor( private configService:ConfigService){}

  requestToken(tokenPayload: TokenRequestInput) {

    return 'This action adds a new auth';
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
