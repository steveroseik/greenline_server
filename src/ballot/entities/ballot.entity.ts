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
import { Field, ObjectType } from "@nestjs/graphql";
@Index("rackId", ["rackId"], {})
@Entity("ballot", { schema: "greenline_db" })
@ObjectType('ballot')
export class Ballot {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "merchantId", nullable: true})
  @Field({ nullable: true })
  merchantId?: number;

  @Column("int", { name: "rackId" })
  @Field()
  rackId: number;

  @Column("int", { name: "level" })
  @Field()
  level: number;

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
