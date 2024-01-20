import { Module, forwardRef } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestResolver } from './request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({

  imports: [TypeOrmModule.forFeature([Request]), forwardRef(() => UserModule)],
  providers: [RequestResolver, RequestService],
  exports: [RequestService]
})
export class RequestModule {}
