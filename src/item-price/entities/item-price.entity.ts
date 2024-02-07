import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Item } from "src/item/entities/item.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import { DecimalToString, DecimalTransformer } from "support/decimal.transformer";
import Decimal from "decimal.js";

@Index("itemSku", ["itemSku"], {})
@Entity("itemPrice", { schema: "greenline_db" })
@ObjectType('itemPrice')
export class ItemPrice {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "itemSku", length: 255 })
  @Field()
  itemSku: string;

  @Column("varchar", { name: "currency", length: 255 })
  @Field()
  currency: string;

  @Column("decimal", { name: "price", precision: 10, scale: 2, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String)
  price?: Decimal;

  @Column("decimal", { name: "discount", precision: 10, scale: 2, nullable: true, transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), { toPlainOnly: true })
  @Field(() => String, { nullable: true })
  discount?: Decimal;

  @Column("timestamp", { name: "startDiscount" , nullable: true})
  @Field({nullable: true})
  startDiscount?: Date;

  @Column("timestamp", { name: "endDiscount", nullable: true })
  @Field({nullable: true})
  endDiscount?: Date;

  @ManyToOne(() => Item, (item) => item.itemPrices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "itemSku", referencedColumnName: "sku" }])
  @Field(() => Item)
  item: Item;
}
