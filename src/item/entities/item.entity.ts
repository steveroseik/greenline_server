import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { ItemPrice } from "src/item-price/entities/item-price.entity";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("merchantId", ["merchantId"], {})
@Entity("item", { schema: "greenline_db" })
@ObjectType('item')
export class Item {
  @Column("varchar", { primary: true, name: "sku", length: 255 })
  @Field()
  sku: string;

  @Column("varchar", { name: "merchantSku", length: 255 })
  @Field()
  merchantSku: string;

  @Column("int", { name: "merchantId"})
  @Field()
  merchantId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("varchar", { name: "color", length: 50, nullable: true})
  @Field({ nullable: true })
  color?: string;

  @Column("varchar", { name: "colorCode", length: 50, nullable: true})
  @Field({ nullable: true })
  colorHex?: string;

  @Column("varchar", { name: "size", length: 15, nullable: true })
  @Field({ nullable: true })
  size?: string;

  @Column("varchar", { name: "description", length: 255, default: ""})
  @Field()
  description: string;

  @Column("varchar", { name: "imageUrl", length: 255 })
  @Field()
  imageUrl: string;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;
}
