import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Request } from "src/request/entities/request.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("requestId", ["requestId"], {})
@Entity("requestStatusHistory", { schema: "greenline_db" })
@ObjectType('requestStatusHistory')
export class RequestStatusHistory {
  @Column("int", { primary: true, name: "id" })
  @Field()
  id: number;

  @Column("int", { name: "requestId" })
  @Field()
  requestId: number;

  @Column("int", { name: "status" })
  @Field()
  status: number;

  //TODO:: missing user information, add if needed
  @Column("int", { name: "userId" })
  @Field()
  userId: number;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @ManyToOne(() => Request, (request) => request.requestStatusHistory, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "requestId", referencedColumnName: "id" }])
  @Field(() => Request)
  request: Request;

  
}
