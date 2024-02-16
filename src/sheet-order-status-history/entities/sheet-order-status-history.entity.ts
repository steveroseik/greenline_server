import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
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

  @Column("varchar", { name: "description", length: 255, default: ''})
  @Field()
  description: string;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  
}
