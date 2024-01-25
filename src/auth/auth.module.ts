import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { AuthPayload } from './entities/authPayload.entity';
import { AccessPayload } from './entities/accessPayload.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [AuthPayload, AccessPayload, UserModule],
  providers: [AuthResolver, AuthService, JwtService],
})
export class AuthModule {}
