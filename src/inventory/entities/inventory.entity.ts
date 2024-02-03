import { Column, Entity, GeoJSON, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { InventoryPrices } from "src/inventory-prices/entities/inventory-prices.entity";
import { Rack } from "src/rack/entities/rack.entity";
import { InventorySupport } from "src/inventory-support/entities/inventory-support.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { GeoLocation } from "support/geolocation.type";

@Entity("inventory", { schema: "greenline_db" })
@ObjectType('inventory')
export class Inventory {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "hubId", nullable: true })
  @Field({ nullable: true})
  hubId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("int", { name: "module" })
  @Field()
  module: number;

  @Column("int", { name: "zoneId"})
  @Field()
  zoneId: number;

  @Column({ type: "point",  
  name: 'location',})
  @Field(() => GeoLocation)
  location: JSON;

  @Column("int", { name: "rentType" })
  @Field()
  rentType: number;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(
    () => InventoryPrices,
    (inventoryPrices) => inventoryPrices.inventory
  )
  @Field(() => [InventoryPrices])
  inventoryPrices: InventoryPrices[];

  @OneToMany(
    () => InventorySupport,
    (inventorySupport) => inventorySupport.inventory
  )
  @Field(() => [InventorySupport])
  inventorySupports: InventorySupport[];

  
}
