import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Ballot } from "src/ballot/entities/ballot.entity";
import { ItemInBox } from "src/item-in-box/entities/item-in-box.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("ballotId", ["ballotId"], {})
@Entity("box", { schema: "greenline_db" })
@ObjectType('box')
export class Box {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "ballotId"})
  @Field()
  ballotId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("timestamp", { name: "createdAt"})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @ManyToOne(() => Ballot, (ballot) => ballot.boxes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "ballotId", referencedColumnName: "id" }])
  @Field(() => Ballot)
  ballot: Ballot;

  @OneToMany(() => ItemInBox, (itemInBox) => itemInBox.box)
  @Field(() => [ItemInBox])
  itemsInBox: ItemInBox[];
}
