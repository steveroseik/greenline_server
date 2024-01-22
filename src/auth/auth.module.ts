import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { AuthPayload } from './entities/authPayload.entity';
import { AccessPayload } from './entities/accessPayload.entity';

@Module({
  imports: [AuthPayload, AccessPayload],
  providers: [AuthResolver, AuthService, JwtService],
})
export class AuthModule {}
