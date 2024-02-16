import { Column, Entity, Index, 
  PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { InventoryItemHistory } from "support/enums";

@Index("itemInBoxId", ["itemInBoxId"], {})
@Entity("inventory-history", { schema: "greenline_db" })
@ObjectType('inventoryHistory')
export class InventoryHistory {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "itemInBoxId" })
  @Field()
  itemInBoxId: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("enum", { name: "type", enum: InventoryItemHistory })
  @Field(() => InventoryItemHistory)
  type: InventoryItemHistory;

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
