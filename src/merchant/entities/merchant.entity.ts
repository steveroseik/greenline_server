import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,
  CreateDateColumn } from "typeorm";
import { Item } from "src/item/entities/item.entity";
import { FinancialAccount } from "src/financial-account/entities/financial-account.entity";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { Transform } from "class-transformer";
import Decimal from "decimal.js";
import { DecimalTransformer, DecimalToString } from "support/decimal.transformer";

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

  @Column("decimal", { name: "threshold", precision: 10, scale: 2, default: 3.0,
  transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), {toPlainOnly: true })
  @Field(() => String)
  threshold?: Decimal;

  @Column("decimal", { name: "basicShipping", precision: 10, scale: 2, default: 50.0,
  transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), {toPlainOnly: true })
  @Field(() => String)
  basicShipping?: Decimal;

  @Column("decimal", { name: "overShipping", precision: 10, scale: 2, default: 10.0,
  transformer: new DecimalTransformer()})
  @Transform(() => DecimalToString(), {toPlainOnly: true })
  @Field(() => String)
  overShipping?: Decimal;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;


}
