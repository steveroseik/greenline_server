import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Request } from "src/request/entities/request.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { OrderStatus } from "src/order-status/entities/order-status.entity";
import { RequestStatus } from "support/enums";

@Index("requestId", ["requestId"], {})
@Entity("request-status-history", { schema: "greenline_db" })
@ObjectType('requestStatusHistory')
export class RequestStatusHistory {
  @PrimaryGeneratedColumn({ name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "requestId" })
  @Field()
  requestId: number;

  @Column("enum", { name: "status", enum: RequestStatus })
  @Field(() => RequestStatus)
  status:RequestStatus

  //TODO:: missing user information, add if needed
  @Column("int", { name: "userId" })
  @Field()
  userId: number;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

  
}
