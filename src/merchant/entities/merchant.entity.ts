import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,
  CreateDateColumn } from "typeorm";
import { Item } from "src/item/entities/item.entity";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Entity("merchant", { schema: "greenline_db" })
@ObjectType('merchant')
export class Merchant {
  
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("tinyint", { name: "includesVAT", width: 1 })
  @Field()
  includesVat: boolean;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

@UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;


}
