import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { Field, ObjectType } from "@nestjs/graphql";

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

  @Column("int", { name: "type" })
  @Field()
  type: number ;

  @Column("int", { name: "amount" })
  @Field()
  amount: number;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;
}
