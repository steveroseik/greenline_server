import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InventoryHistory } from "src/inventory-history/entities/inventory-history.entity";
import { Item } from "src/item/entities/item.entity";
import { Box } from "src/box/entities/box.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("itemSku", ["itemSku"], {})
@Index("boxId", ["boxId"], {})
@Entity("item-in-box", { schema: "greenline_db" })
@ObjectType('itemInBox')
export class ItemInBox {

  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "inventoryId" })
  @Field()
  inventoryId:number

  @Column("int", { name: "merchantId", nullable: true})
  @Field({ nullable: true })
  merchantId?: number;

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

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;

}
