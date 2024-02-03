import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventory } from "src/inventory/entities/inventory.entity";
import { Ballot } from "src/ballot/entities/ballot.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("inventoryId", ["inventoryId"], {})
@Entity("rack", { schema: "greenline_db" })
@ObjectType('rack')
export class Rack {
  @PrimaryGeneratedColumn({ name: "id" })
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

  
  @OneToMany(() => Ballot, (ballot) => ballot.rack)
  @Field(() => [Ballot])
  ballots: Ballot[];
}
