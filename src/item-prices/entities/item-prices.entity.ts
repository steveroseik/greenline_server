import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "src/item/entities/item.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("itemSku", ["itemSku"], {})
@Entity("itemPrices", { schema: "greenline_db" })
@ObjectType('itemPrices')
export class ItemPrices {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "itemSku", length: 255 })
  @Field()
  itemSku: string;

  @Column("varchar", { name: "currency", length: 255 })
  @Field()
  currency: string;

  @Column("float", { name: "price", precision: 12 })
  @Field()
  price: number;

  @Column("float", { name: "discount", precision: 12 })
  @Field()
  discount: number;

  @Column("datetime", { name: "startDiscount" })
  @Field()
  startDiscount: Date;

  @Column("datetime", { name: "endDiscount" })
  @Field()
  endDiscount: Date;

  @ManyToOne(() => Item, (item) => item.itemPrices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "itemSku", referencedColumnName: "sku" }])
  @Field(() => Item)
  item: Item;
}
