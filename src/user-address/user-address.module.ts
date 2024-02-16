import { Module } from '@nestjs/common';
import { UserAddressService } from './user-address.service';
import { UserAddressResolver } from './user-address.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress } from './entities/user-address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddress])],
  providers: [UserAddressResolver, UserAddressService],
  exports: [UserAddressService]
})
export class UserAddressModule {}
