import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SheetOrder } from "src/sheet-order/entities/sheet-order.entity";
import { User } from "src/user/entities/user.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { CourierSheetStatus } from "support/enums";

@Index("userId", ["userId"], {})
@Entity("courier-sheet", { schema: "greenline_db" })
@ObjectType('courierSheet')
export class CourierSheet {

  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("varchar", { name: "userId" })
  @Field()
  userId: string;

  @Column("enum", { name: "status", enum:CourierSheetStatus, default: CourierSheetStatus.inProgress })
  @Field(() => CourierSheetStatus)
  status: CourierSheetStatus;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;
  
  @OneToMany(() => SheetOrder, (sheetOrder) => sheetOrder.sheet)
  @Field(() => [SheetOrder])
  sheetOrders: SheetOrder[];
}
