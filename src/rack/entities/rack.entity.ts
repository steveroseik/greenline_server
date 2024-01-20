import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Inventory } from "src/inventory/entities/inventory.entity";
import { Ballot } from "src/ballot/entities/ballot.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("inventoryId", ["inventoryId"], {})
@Entity("rack", { schema: "greenline_db" })
@ObjectType('rack')
export class Rack {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "inventoryId" })
  @Field()
  inventoryId: number;

  @Column("int", { name: "levels" })
  @Field()
  levels: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => Inventory, (inventory) => inventory.racks, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "inventoryId", referencedColumnName: "id" }])
  @Field(() => Inventory)
  inventory: Inventory;

  @OneToMany(() => Ballot, (ballot) => ballot.rack)
  @Field(() => [Ballot])
  ballots: Ballot[];
}
