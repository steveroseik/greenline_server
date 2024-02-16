import { Column, CreateDateColumn, Entity, GeoJSON, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { InventoryPrice } from "src/inventory-prices/entities/inventory-price.entity";
import { Rack } from "src/rack/entities/rack.entity";
import { InventorySupport } from "src/inventory-support/entities/inventory-support.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { GeoLocation } from "support/geolocation.type";
import { InventoryRentType } from "support/enums";

@Entity("inventory", { schema: "greenline_db" })
@ObjectType('inventory')
export class Inventory {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "hubId", nullable: true })
  @Field({ nullable: true})
  hubId: number;

  @Column("varchar", { name: "name", length: 255})
  @Field()
  name: string;

  @Column("int", { name: "module", default: 0})
  @Field()
  module: number;

  @Column("int", { name: "zoneId", nullable: true })
  @Field()
  zoneId: number;

  @Column({ type: "point",  
  name: 'location', nullable: true})
  @Field(() => GeoLocation)
  location: JSON;

  @Column("enum", { name: "rentType", enum: InventoryRentType })
  @Field(() => InventoryRentType)
  rentType: InventoryRentType;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;

  @OneToMany(
    () => InventoryPrice,
    (inventoryPrices) => inventoryPrices.inventory
  )
  @Field(() => [InventoryPrice])
  inventoryPrices: InventoryPrice[];

  @OneToMany(
    () => InventorySupport,
    (inventorySupport) => inventorySupport.inventory
  )
  @Field(() => [InventorySupport])
  inventorySupports: InventorySupport[];

  
}
