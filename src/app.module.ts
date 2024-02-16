import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import { OrderItemModule } from './order-item/order-item.module';
import { FinancialAccountModule } from './financial-account/financial-account.module';
import { RequestModule } from './request/request.module';
import { RequestStatusHistoryModule } from './request-status-history/request-status-history.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { SheetOrderModule } from './sheet-order/sheet-order.module';
import { SheetOrderStatusHistoryModule } from './sheet-order-status-history/sheet-order-status-history.module';
import { CourierSheetModule } from './courier-sheet/courier-sheet.module';
import { UserAddressModule } from './user-address/user-address.module';
import { UserModule } from './user/user.module';
import { MerchantModule } from './merchant/merchant.module';
import { OrderRelationModule } from './order-relation/order-relation.module';
import { InventoryHistoryModule } from './inventory-history/inventory-history.module';
import { ItemInBoxModule } from './item-in-box/item-in-box.module';
import { InventoryPricesModule } from './inventory-prices/inventory-price.module';
import { InventorySupportModule } from './inventory-support/inventory-support.module';
import { InventoryModule } from './inventory/inventory.module';
import { ItemPriceModule } from './item-price/item-price.module';
import { FinancialTransactionModule } from './financial-transaction/financial-transaction.module';
import { FinancialRequestStatusModule } from './financial-request-status/financial-request-status.module';
import { RackModule } from './rack/rack.module';
import { BoxModule } from './box/box.module';
import { BallotModule } from './ballot/ballot.module';
import { OrderModule } from './order/order.module';
import { ExpenseModule } from './expense/expense.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverAsyncConfig, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ListenersModule } from './listeners/listeners.module';
import typeorm from "../db/data-source";
import { AuthModule } from './auth/auth.module';

// import  { dataConfig } from "../db/data-source";
import { DataloaderRegistryFactory } from './dataloaders/dataloaderRegistryFactory';
import { UserRoleService } from './user-role/user-role.service';
import { DataloadersModule } from './dataloaders/dataloaders.module';

import { DateScalarMode, NumberScalarMode } from "@nestjs/graphql";
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGaurd } from './auth/gaurds/accessToken.gaurd';
import { HubModule } from './hub/hub.module';
import { GeoLocation } from 'support/geolocation.type';
import { ItemPriceListModule } from './item-price-list/item-price-list.module';
import express from 'express';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm')),
    }),
    // TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   installSubscriptionHandlers: true,
    //   subscriptions: {
    //     'graphql-ws': true,
    //     'subscriptions-transport-ws': true,
    //   },
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   buildSchemaOptions: {
    //     numberScalarMode: 'integer',
    //     dateScalarMode: 'timestamp',
    //   },
    //   context: ({ req }) => ({ req }),
    // }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [DataloadersModule],
      inject: [DataloaderRegistryFactory],
      useFactory: (dataloaderService: DataloaderRegistryFactory) => ({
        installSubscriptionHandlers: true,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          buildSchemaOptions: {
            numberScalarMode: 'integer',
            dateScalarMode: 'timestamp',
          },
          context: () => ({
            loaders: dataloaderService.create(),
          }),
      }),
    }),
    ItemModule, ItemPriceModule, 
    InventoryModule, InventorySupportModule, 
    InventoryPricesModule, RackModule, 
    BallotModule, BoxModule, 
    ItemInBoxModule, InventoryHistoryModule, 
    OrderModule, OrderRelationModule, OrderItemModule, 
    MerchantModule, UserModule, UserAddressModule, 
    CourierSheetModule, SheetOrderStatusHistoryModule, 
    SheetOrderModule, OrderStatusModule, RequestStatusHistoryModule, 
    RequestModule, FinancialAccountModule, ExpenseModule, 
    FinancialTransactionModule, FinancialRequestStatusModule, 
    AuthModule,
    RoleModule, UserRoleModule, ListenersModule, DataloadersModule, HubModule, ItemPriceListModule,
    ],
  controllers: [AppController],
  providers: [AppService, DataloaderRegistryFactory, 
    {provide: APP_GUARD, useClass: AccessTokenGaurd}],
})
export class AppModule {}

