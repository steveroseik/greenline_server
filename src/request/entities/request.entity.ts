import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RequestStatusHistory } from "src/request-status-history/entities/request-status-history.entity";
import { User } from "src/user/entities/user.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("fromId", ["fromId"], {})
@Entity("request", { schema: "greenline_db" })
@ObjectType('request')
export class Request {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "type" })
  @Field()
  type: number;

  @Column("int", { name: "priority" })
  @Field()
  priority: number;

  @Column("int", { name: "fromId" })
  @Field()
  fromId: number;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("int", { name: "status" })
  @Field()
  status: number;

  @Column("datetime", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("datetime", { name: "lastModified" })
  @Field()
  lastModified: Date;

  @OneToMany(
    () => RequestStatusHistory,
    (requestStatusHistory) => requestStatusHistory.request
  )
  @Field(() => [RequestStatusHistory])
  requestStatusHistory: RequestStatusHistory[];

  @ManyToOne(() => User, (user) => user.requestsSent, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fromId", referencedColumnName: "id" }])
  @Field(() => User)
  from: User;

  @ManyToMany(() => User, (user) => user.requestsReceived)
  @JoinTable({
    name: "requestTo",
    joinColumns: [{ name: "requestId", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "toId", referencedColumnName: "id" }],
    schema: "greenline_db",
  })
  @Field(() => [User])
  users: User[];
}
