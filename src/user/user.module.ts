import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RequestModule } from 'src/request/request.module';
import { UserRoleModule } from 'src/user-role/user-role.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => RequestModule), UserRoleModule],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule {}
