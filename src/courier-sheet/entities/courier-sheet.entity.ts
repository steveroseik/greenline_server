import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SheetOrder } from "src/sheet-order/entities/sheet-order.entity";
import { User } from "src/user/entities/user.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("userId", ["userId"], {})
@Entity("courierSheet", { schema: "greenline_db" })
@ObjectType('courierSheet')
export class CourierSheet {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("int", { name: "status" })
  @Field()
  status: number;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(() => SheetOrder, (sheetOrder) => sheetOrder.sheet)
  @Field(() => [SheetOrder])
  sheetOrders: SheetOrder[];

  @ManyToOne(() => User, (user) => user.courierSheets, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  @Field(() => User)
  user: User;
}
