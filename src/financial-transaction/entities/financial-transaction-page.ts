import { Field, ObjectType } from "@nestjs/graphql";
import { PaginationResponse } from "support/page-response.entity";
import { FinancialTransaction } from "./financial-transaction.entity";

@ObjectType()
export class FinancialTransactionPage extends PaginationResponse{


    @Field(() => [FinancialTransaction])
    data: FinancialTransaction[]

    
}