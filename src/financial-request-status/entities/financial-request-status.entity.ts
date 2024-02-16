import { Column, Entity, JoinColumn, OneToOne, CreateDateColumn } from "typeorm";
import { FinancialTransaction } from "src/financial-transaction/entities/financial-transaction.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { TransactionStatus } from "support/enums";


@Entity("financial-request-status", { schema: "greenline_db" })
@ObjectType('financalRequestStatus')
export class FinancialRequestStatus {
  @Column("int", { primary: true, name: "requestId" })
  @Field()
  requestId: number;

  @Column("enum", { name: "status", enum:TransactionStatus })
  @Field(() => TransactionStatus)
  status: TransactionStatus;

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

}
