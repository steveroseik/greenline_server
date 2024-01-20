import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { FinancialTransaction } from "src/financial-transaction/entities/financial-transaction.entity";
import { Field, ObjectType } from "@nestjs/graphql";
@Entity("financialRequestStatus", { schema: "greenline_db" })
@ObjectType('financalRequestStatus')
export class FinancialRequestStatus {
  @Column("int", { primary: true, name: "requestId" })
  @Field()
  requestId: number;

  @Column("int", { name: "status" })
  @Field()
  status: number;

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @OneToOne(
    () => FinancialTransaction,
    (financialTransaction) => financialTransaction.financialRequestStatus,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "requestId", referencedColumnName: "id" }])
  @Field(() => FinancialTransaction)
  request: FinancialTransaction;
}
