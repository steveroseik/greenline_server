import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { User } from "src/user/entities/user.entity";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("userId", ["userId"], {})
@Entity("user-address", { schema: "greenline_db" })
@ObjectType('userAddress')
export class UserAddress {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("int", { name: "countryId" })
  @Field()
  countryId: number;

  @Column("int", { name: "cityId" })
  @Field()
  cityId: number;

  @Column("varchar", { name: "address", length: 255 })
  @Field()
  address: string;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;
}
