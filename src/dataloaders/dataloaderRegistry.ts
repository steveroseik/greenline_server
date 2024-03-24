import { UserRoleService } from "src/user-role/user-role.service";
import UserRoleDataLoader from "./loaders/UserRoleDataLoader";
import { RoleService } from "src/role/role.service";
import RoleDataLoader from "./loaders/RoleDataLoader";
import { ItemService } from "src/item/item.service";
import ItemDataLoader from "./loaders/ItemDataLoader";
import { ItemInBoxService } from "src/item-in-box/item-in-box.service";
import ItemInBoxInventoryLoader from "./loaders/ItemInBoxInventoryLoader";
import { RackService } from "src/rack/rack.service";
import RackInventoryLoader from "./loaders/RackInventoryLoader";
import ItemInBoxCountLoader from "./loaders/ItemInBoxCountLoader";
import OrderItemsLoader from "./loaders/OrderItemsLoader";
import { OrderItemService } from "src/order-item/order-item.service";
import { ItemPriceService } from "src/item-price/item-price.service";
import ItemPriceListsDataLoader from "./loaders/itemPriceListsDataLoader";
import ItemInBoxSkuLoader from "./loaders/ItemInBoxSkuLoader";
import SheetOrdersDataLoader from "./loaders/SheetOrdersDataLoader";
import { SheetOrderService } from "src/sheet-order/sheet-order.service";
import { OrderService } from "src/order/order.service";
import OrdersDataLoader from "./loaders/OrdersDataLoader";
import { UserAddressService } from "src/user-address/user-address.service";
import UserAddressesDataLoader from "./loaders/userAddressesDataLoader";
import OrderStatusesDataLoader from "./loaders/orderStatusesDataLoader";
import { OrderStatusService } from "src/order-status/order-status.service";
import { ItemPriceListService } from "src/item-price-list/item-price-list.service";
import ItemPricesDataLoader from "./loaders/itemPricesDataLoader";
import { BallotService } from "src/ballot/ballot.service";
import BallotsInRackDataLoader from "./loaders/BallotInRackDataLoader";

export class DataloaderRegistry {
  private cache: Record<string, any> = {};

  constructor(
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,
    private readonly itemService: ItemService,
    private readonly itemInBoxService:ItemInBoxService,
    private readonly rackService:RackService,
    private readonly orderItemService:OrderItemService,
    private readonly itemPriceService:ItemPriceService,
    private readonly sheetOrderService:SheetOrderService,
    private readonly orderService:OrderService,
    private readonly userAddressService:UserAddressService,
    private readonly orderStatusService:OrderStatusService,
    private readonly itemPriceListService:ItemPriceListService,
    private readonly ballotService:BallotService,
    ) {}

  /**
   * Fetches a memoized service based on a string key, or invokes fallback to create one.
   */
  private get<T>(key: string, fallback: () => T): T {
    if (!this.cache[key]) {
      this.cache[key] = fallback();
    }
    return this.cache[key];
  }
  /**
   * Just a pretty type-safe facade for invoking `this.get`.
   * Make more of your own as you wish.
   */

  public get ItemDataLoader() {
    return this.get('ItemDataLoader', () => ItemDataLoader.create(this.itemService));
  }

  public get RackInventoryLoader() {
    return this.get('RackInventoryLoader', () => RackInventoryLoader.create(this.rackService));
  }

   public get ItemInBoxInventoryLoader() {
    return this.get('ItemInBoxInventoryLoader', () => ItemInBoxInventoryLoader.create(this.itemInBoxService));
  }

  public get ItemInBoxCountLoader() {
    return this.get('ItemInBoxCountLoader', () => ItemInBoxCountLoader.create(this.itemInBoxService));
  }

  public get ItemInBoxSkuLoader() {
    return this.get('ItemInBoxSkuLoader', () => ItemInBoxSkuLoader.create(this.itemInBoxService));
  }

  public get UserRoleDataLoader() {
    return this.get('UserRoleDataLoader', () => UserRoleDataLoader.create(this.userRoleService));
  }

  public get RoleDataLoader() {
    return this.get('RoleDataLoader', () => RoleDataLoader.create(this.roleService))
  }

  public get OrderItemsDataLoader(){
    return this.get('OrderItemsDataLoader', () => OrderItemsLoader.create(this.orderItemService))
  }

  public get ItemPriceListsDataLoader(){
    return this.get('ItemPriceListsDataLoader', () => ItemPriceListsDataLoader.create(this.itemPriceListService))
  }

  public get ItemPricesDataLoader(){
    return this.get('ItemPricesDataLoader', () => ItemPricesDataLoader.create(this.itemPriceService))
  }

  public get SheetOrdersDataLoader(){
    return this.get('SheetOrdersDataLoader', () => SheetOrdersDataLoader.create(this.sheetOrderService))
  }
  
  public get OrdersDataLoader(){
    return this.get('OrdersDataLoader', () => OrdersDataLoader.create(this.orderService))
  }

  public get UserAddressesDataLoader(){
    return this.get('UserAddressesLoader', () => UserAddressesDataLoader.create(this.userAddressService))
  }

  public get OrderStatusesDataLoader(){
    return this.get('OrderStatusesDataLoader', () => OrderStatusesDataLoader.create(this.orderStatusService))
  }

  public get BallotsInRackDataLoader(){
    return this.get('BallotsInRackDataLoader', () => BallotsInRackDataLoader.create(this.ballotService))
  }
}