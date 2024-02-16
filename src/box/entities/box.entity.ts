import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { Ballot } from "src/ballot/entities/ballot.entity";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("ballotId", ["ballotId"], {})
@Entity("box", { schema: "greenline_db" })
@ObjectType('box')
export class Box {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "merchantId", nullable: true})
  @Field({ nullable: true })
  merchantId?: number;

  @Column("int", { name: "ballotId"})
  @Field()
  ballotId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

@UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;
}
