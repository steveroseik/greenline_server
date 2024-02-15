import { Module } from '@nestjs/common';
import { DataloaderRegistry } from './dataloaderRegistry';
import { DataloaderRegistryFactory } from './dataloaderRegistryFactory';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { RoleModule } from 'src/role/role.module';
import { ItemModule } from 'src/item/item.module';
import { ItemInBoxModule } from 'src/item-in-box/item-in-box.module';
import { RackModule } from 'src/rack/rack.module';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { ItemPriceModule } from 'src/item-price/item-price.module';
import { SheetOrderModule } from 'src/sheet-order/sheet-order.module';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [UserRoleModule, 
    RoleModule, 
    ItemModule, 
    ItemInBoxModule, 
    RackModule, OrderItemModule, 
    ItemPriceModule, SheetOrderModule, OrderModule],
  providers: [DataloaderRegistry, DataloaderRegistryFactory],
  exports: [DataloaderRegistryFactory]
})
export class DataloadersModule {}
