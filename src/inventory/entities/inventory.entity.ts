import { Column, Entity, OneToMany } from "typeorm";
import { InventoryPrices } from "src/inventory-prices/entities/inventory-prices.entity";
import { Rack } from "src/rack/entities/rack.entity";
import { InventorySupport } from "src/inventory-support/entities/inventory-support.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Entity("inventory", { schema: "greenline_db" })
@ObjectType('inventory')
export class Inventory {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "hubId" })
  @Field()
  hubId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("int", { name: "module" })
  @Field()
  module: number;

  @Column("varchar", { name: "zone", length: 255 })
  @Field()
  zone: string;

  @Column("varchar", { name: "location", length: 255 })
  @Field()
  location: string;

  @Column("int", { name: "rentType" })
  @Field()
  rentType: number;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(
    () => InventoryPrices,
    (inventoryPrices) => inventoryPrices.inventory
  )
  @Field(() => [InventoryPrices])
  inventoryPrices: InventoryPrices[];

  @OneToMany(() => Rack, (rack) => rack.inventory)
  @Field(() => [Rack])
  racks: Rack[];

  @OneToMany(
    () => InventorySupport,
    (inventorySupport) => inventorySupport.inventory
  )
  @Field(() => [InventorySupport])
  inventorySupports: InventorySupport[];
}
