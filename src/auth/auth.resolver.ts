import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './entities/authPayload.entity';
import { TokenRequestInput } from './dto/sign-in.input';
import { UpdateAuthInput } from './dto/sign-up.input';
import { AccessPayload } from './entities/accessPayload.entity';
import admin from '../../src/main';
import { Auth } from 'firebase-admin/auth';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => AuthPayload)
export class AuthResolver {

  private firebaseAuth:Auth;

  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async requestToken(@Args('requestToken') requestTokenPayload: TokenRequestInput): Promise<User | null> {

    return this.authService.requestToken(requestTokenPayload);
  }

  @Query(() => [AuthPayload], { name: 'auth' })
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => AuthPayload, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => AuthPayload)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    throw Error('unimplemented')
    // return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => AuthPayload)
  removeAuth(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
