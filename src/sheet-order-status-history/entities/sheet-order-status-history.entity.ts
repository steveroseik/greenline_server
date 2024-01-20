import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { SheetOrder } from "src/sheet-order/entities/sheet-order.entity";
import { User } from "src/user/entities/user.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("sheetOrderId", ["sheetOrderId"], {})
@Index("userId", ["userId"], {})
@Entity("sheetOrderStatusHistory", { schema: "greenline_db" })
@ObjectType('sheetOrderStatusHistory')
export class SheetOrderStatusHistory {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "sheetOrderId" })
  @Field()
  sheetOrderId: number;

  @Column("int", { name: "status" })
  @Field()
  status: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @ManyToOne(
    () => SheetOrder,
    (sheetOrder) => sheetOrder.sheetOrderStatusHistory,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "sheetOrderId", referencedColumnName: "id" }])
  @Field(() => SheetOrder)
  sheetOrder: SheetOrder;

  @ManyToOne(() => User, (user) => user.sheetOrderStatusHistories, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  @Field(() => User)
  user: User;
}
