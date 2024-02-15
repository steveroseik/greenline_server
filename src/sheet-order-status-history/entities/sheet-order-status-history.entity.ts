import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
import { SheetOrder } from "src/sheet-order/entities/sheet-order.entity";
import { User } from "src/user/entities/user.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { OrderStatusEnum, SheetOrderStatus } from "support/enums";

@Index("sheetOrderId", ["sheetOrderId"], {})
@Index("userId", ["userId"], {})
@Entity("sheet-order-status-history", { schema: "greenline_db" })
@ObjectType('sheetOrderStatusHistory')
export class SheetOrderStatusHistory {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "sheetOrderId" })
  @Field()
  sheetOrderId: number;

  @Column("enum", { name: "status", enum: SheetOrderStatus })
  @Field(() => SheetOrderStatus)
  status:SheetOrderStatus

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  
}
