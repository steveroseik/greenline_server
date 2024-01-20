import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "src/user/entities/user.entity";
import { Order } from "src/order/entities/order.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("userId", ["userId"], {})
@Entity("userAddress", { schema: "greenline_db" })
@ObjectType('userAddress')
export class UserAddress {
  @Column("int", { primary: true, name: "id" })
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

  @Column("varchar", { name: "details", length: 255 })
  @Field()
  details: string;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => User, (user) => user.userAddresses, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  @Field(() => User)
  user: User;

  @OneToMany(() => Order, (order) => order.userAddress)
  @Field(() => [Order])
  orders: Order[];
}
