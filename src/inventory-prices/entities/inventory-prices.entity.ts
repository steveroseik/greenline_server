import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Inventory } from "src/inventory/entities/inventory.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import { Transform } from "class-transformer";
import Decimal from "decimal.js";

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

  @Column("decimal", { name: "price", precision: 10, scale: 2, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  price: Decimal;

  @Column("decimal", { name: "discount", precision: 10, scale: 2, nullable: true, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String, { nullable: true })
  discount?: Decimal;

  @Column("timestamp", { name: "startDiscount", nullable: true})
  @Field({ nullable: true})
  startDiscount?: Date;

  @Column("timestamp", { name: "endDiscount", nullable: true })
  @Field({ nullable: true})
  endDiscount?: Date;

  @ManyToOne(() => Inventory, (inventory) => inventory.inventoryPrices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "inventoryId", referencedColumnName: "id" }])
  @Field(() => Inventory)
  inventory: Inventory;
}
