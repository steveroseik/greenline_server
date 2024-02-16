import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";

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

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

@UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;

}
