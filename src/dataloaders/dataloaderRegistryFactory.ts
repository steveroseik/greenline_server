import { Injectable } from "@nestjs/common";
import { UserRoleService } from "src/user-role/user-role.service";
import { DataloaderRegistry } from "./dataLoaderRegistry";
import { RoleService } from "src/role/role.service";
import { ItemService } from "src/item/item.service";
import { ItemInBoxService } from "src/item-in-box/item-in-box.service";
import { RackService } from "src/rack/rack.service";
import { OrderItemService } from "src/order-item/order-item.service";
import { ItemPriceService } from "src/item-price/item-price.service";
import { SheetOrderService } from "src/sheet-order/sheet-order.service";
import { OrderService } from "src/order/order.service";



@Injectable()
export class DataloaderRegistryFactory {
  constructor(
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,
    private readonly itemService: ItemService,
    private readonly itemInBoxService: ItemInBoxService,
    private readonly rackService: RackService,
    private readonly orderItemService:OrderItemService,
    private readonly itemPriceService:ItemPriceService,
    private readonly sheetOrderService:SheetOrderService,
    private readonly orderService:OrderService) {}

  public create() {
    return new DataloaderRegistry(this.userRoleService, 
      this.roleService, this.itemService, this.itemInBoxService,
      this.rackService, this.orderItemService, this.itemPriceService,
      this.sheetOrderService, this.orderService);
  }
}