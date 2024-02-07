import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Box } from "src/box/entities/box.entity";
import { Rack } from "src/rack/entities/rack.entity";
import { Field, ObjectType } from "@nestjs/graphql";
@Index("rackId", ["rackId"], {})
@Entity("ballot", { schema: "greenline_db" })
@ObjectType('ballot')
export class Ballot {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "rackId" })
  @Field()
  rackId: number;

  @Column("int", { name: "level" })
  @Field()
  level: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;

  @OneToMany(() => Box, (box) => box.ballot)
  @Field(() => [Box])
  boxes: Box[];

  @ManyToOne(() => Rack, (rack) => rack.ballots, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "rackId", referencedColumnName: "id" }])
  @Field(() => Rack)
  rack: Rack;
}
