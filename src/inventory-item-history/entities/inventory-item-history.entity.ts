import { Column, Entity, Index, 
  PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { ItemHistoryEnum } from "support/enums";

@Index("itemInBoxId", ["itemInBoxId"], {})
@Entity("inventory-item-history", { schema: "greenline_db" })
@ObjectType('inventoryItemHistory')
export class InventoryItemHistory {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "itemInBoxId" })
  @Field()
  itemInBoxId: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("enum", { name: "type", enum: ItemHistoryEnum })
  @Field(() => ItemHistoryEnum)
  type: ItemHistoryEnum;

  @Column("int", { name: "amount" })
  @Field()
  amount: number;

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;
}
