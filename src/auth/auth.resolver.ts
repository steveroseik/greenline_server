import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { TokenRequestInput } from './dto/tokenRequest.input';
import admin from '../../src/main';
import { Auth } from 'firebase-admin/auth';
import { User } from 'src/user/entities/user.entity';
import { UserTokenResponse } from 'src/compoundEntities/userLoginResponse.entity';
import { EmailValidityPayload } from 'src/compoundEntities/EmailValidity.entity';
import { Public } from './decorators/publicDecorator';
import { CurrentUser } from './decorators/currentUserDecorator';
import { RefreshTokenGaurd } from './gaurds/refreshToken.gaurd';
import { UseGuards } from '@nestjs/common';
import { AllowedRoles, Roles } from './decorators/RolesDecorator';
import { RolesGaurd } from './gaurds/Roles.gaurd';

@Resolver()
export class AuthResolver {

  private firebaseAuth:Auth;

  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => UserTokenResponse)
  async requestToken(@Args('requestTokenInput') requestTokenPayload: TokenRequestInput): Promise<UserTokenResponse | null> {

    return this.authService.requestToken(requestTokenPayload);
  }

  // @Public()
  // @UseGuards(RefreshTokenGaurd)
  // @Mutation(() => UserTokenResponse)
  // refreshToken(
  //   @Args('firebaseToken') firebaseToken:string,
  //   @CurrentUser('refreshToken') refreshToken:string){
  //   return this.authService.getNewToken({
  //     token: firebaseToken,
  //     refreshToken
  //   })
  // }

  @Public()
  @Query(() => EmailValidityPayload)
  isValidEmail(@Args('email') email:string) {
    return this.authService.isEmailValid(email);
  }

}
