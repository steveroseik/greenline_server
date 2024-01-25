import { Module } from '@nestjs/common';
import { DataloaderRegistry } from './dataloaderRegistry';
import { DataloaderRegistryFactory } from './dataloaderRegistryFactory';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [UserRoleModule, RoleModule],
  providers: [DataloaderRegistry, DataloaderRegistryFactory],
  exports: [DataloaderRegistryFactory]
})
export class DataloadersModule {}
