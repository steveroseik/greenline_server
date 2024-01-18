import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Box } from "src/box/entities/box.entity";
import { Rack } from "src/rack/entities/rack.entity";
import { Field, ObjectType } from "@nestjs/graphql";
@Index("rackId", ["rackId"], {})
@Entity("ballot", { schema: "greenline_db" })
@ObjectType('ballot')
export class Ballot {
  @Column("int", { primary: true, name: "id" })
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

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
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
