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


  @Column("int", { name: "merchantId", nullable: true})
  @Field({ nullable: true })
  merchantId?: number;

  @Column("int", { name: "inventoryId" })
  @Field()
  inventoryId: number;

  @Column("int", { name: "levels", default: 1})
  @Field()
  levels: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;

}
