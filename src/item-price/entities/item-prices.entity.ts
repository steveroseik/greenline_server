import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Item } from "src/item/entities/item.entity";
import { Field, ObjectType } from "@nestjs/graphql";

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

  @Column("float", { name: "price", precision: 12 })
  @Field()
  price: number;

  @Column("float", { name: "discount", precision: 12, nullable: true})
  @Field({nullable: true})
  discount: number;

  @Column("timestamp", { name: "startDiscount" , nullable: true})
  @Field({nullable: true})
  startDiscount: Date;

  @Column("timestamp", { name: "endDiscount", nullable: true })
  @Field({nullable: true})
  endDiscount: Date;

  @ManyToOne(() => Item, (item) => item.itemPrices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "itemSku", referencedColumnName: "sku" }])
  @Field(() => Item)
  item: Item;
}
