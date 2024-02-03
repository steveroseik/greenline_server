import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("itemInBoxId", ["itemInBoxId"], {})
@Entity("inventoryHistory", { schema: "greenline_db" })
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

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => ItemInBox, (itemInBox) => itemInBox.inventoryHistory, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "itemInBoxId", referencedColumnName: "id" }])
  @Field(() => ItemInBox)
  itemInBox: ItemInBox;
}
