import { Field, InputType } from "@nestjs/graphql";
import { TransactionStatus, TransactionType } from "support/enums";
import { PaginationInput } from "support/pagination.input";

@InputType()

export class FinancialTransactionPaginationInput extends PaginationInput{

    @Field({nullable: true })
    fromAccountId?:number

    @Field({nullable: true })
    toAccountId?:number

    @Field({nullable: true })
    type?:TransactionType

    @Field({nullable: true })
    status?:TransactionStatus

    @Field({ nullable: true, defaultValue: true })
    byId:boolean
}