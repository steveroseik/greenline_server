import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { RequestStatusHistory } from "src/request-status-history/entities/request-status-history.entity";
import { User } from "src/user/entities/user.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { RequestStatus, RequestType } from "support/enums";

@Index("fromId", ["fromId"], {})
@Entity("request", { schema: "greenline_db" })
@ObjectType('request')
export class Request {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("enum", { name: "type", enum: RequestType, default: RequestType.notification })
  @Field(() => RequestType)
  type: RequestType

  @Column("int", { name: "priority" })
  @Field()
  priority: number;

  @Column("varchar", { name: "fromId" })
  @Field()
  fromId: string;

  @Column("varchar", { name: "description", length: 255 })
  @Field()
  description: string;

  @Column("varchar", { name: "extraData", nullable: true, length: 255})
  @Field()
  extraData: string

  @Column("enum", { name: "status", enum: RequestStatus })
  @Field(() => RequestStatus)
  status:RequestStatus

  @CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;

}
