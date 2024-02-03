import { Module } from '@nestjs/common';
import { DataloaderRegistry } from './dataloaderRegistry';
import { DataloaderRegistryFactory } from './dataloaderRegistryFactory';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { RoleModule } from 'src/role/role.module';
import { ItemModule } from 'src/item/item.module';
import { ItemInBoxModule } from 'src/item-in-box/item-in-box.module';
import { RackModule } from 'src/rack/rack.module';

@Module({
  imports: [UserRoleModule, RoleModule, ItemModule, ItemInBoxModule, RackModule],
  providers: [DataloaderRegistry, DataloaderRegistryFactory],
  exports: [DataloaderRegistryFactory]
})
export class DataloadersModule {}
