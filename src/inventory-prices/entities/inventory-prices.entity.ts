import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Inventory } from "src/inventory/entities/inventory.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("inventoryId", ["inventoryId"], {})
@Entity("inventoryPrices", { schema: "greenline_db" })
@ObjectType('inventoryPrices')
export class InventoryPrices {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "inventoryId" })
  @Field()
  inventoryId: number;

  @Column("varchar", { name: "currency", length: 255 })
  @Field()
  currency: string;

  @Column("float", { name: "pricePerUnit", precision: 12 })
  @Field()
  pricePerUnit: number;

  @Column("float", { name: "discount", precision: 12 })
  @Field()
  discount: number;

  @Column("timestamp", { name: "startDiscount" })
  @Field()
  startDiscount: Date;

  @Column("timestamp", { name: "endDiscount" })
  @Field()
  endDiscount: Date;

  @ManyToOne(() => Inventory, (inventory) => inventory.inventoryPrices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "inventoryId", referencedColumnName: "id" }])
  @Field(() => Inventory)
  inventory: Inventory;
}
