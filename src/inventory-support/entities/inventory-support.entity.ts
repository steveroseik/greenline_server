import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Inventory } from "src/inventory/entities/inventory.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("inventoryId", ["inventoryId"], {})
@Entity("inventorySupport", { schema: "greenline_db" })
@ObjectType('inventorySupport')
export class InventorySupport {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "inventoryId" })
  @Field()
  inventoryId: number;

  @Column("int", { name: "governorateId" })
  @Field()
  governorateId: number;

  @Column("int", { name: "zoneId" })
  @Field()
  zoneId: number;

  @ManyToOne(() => Inventory, (inventory) => inventory.inventorySupports, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "inventoryId", referencedColumnName: "id" }])
  @Field(() => Inventory)
  inventory: Inventory;
}