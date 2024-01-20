import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { InventoryHistory } from "src/inventory-history/entities/inventory-history.entity";
import { Item } from "src/item/entities/item.entity";
import { Box } from "src/box/entities/box.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("itemSku", ["itemSku"], {})
@Index("boxId", ["boxId"], {})
@Entity("itemInBox", { schema: "greenline_db" })
@ObjectType('itemInBox')
export class ItemInBox {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "itemSku", length: 255 })
  @Field()
  itemSku: string;

  @Column("int", { name: "boxId"})
  @Field()
  boxId: number;

  @Column("int", { name: "count"})
  @Field()
  count: number;

  @Column("int", { name: "minCount"})
  @Field()
  minCount: number;

  @Column("timestamp", { name: "createdAt"})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified"})
  @Field()
  lastModified: Date;

  @OneToMany(
    () => InventoryHistory,
    (inventoryHistory) => inventoryHistory.itemInBox
  )
  @Field(() => [InventoryHistory])
  inventoryHistory: InventoryHistory[];

  @ManyToOne(() => Item, (item) => item.itemsInBox, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "itemSku", referencedColumnName: "sku" }])
  @Field(() => Item)
  item: Item;

  @ManyToOne(() => Box, (box) => box.itemsInBox, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "boxId", referencedColumnName: "id" }])
  @Field(() => Box)
  box: Box;
}
