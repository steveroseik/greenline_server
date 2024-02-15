import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
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

  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

}
