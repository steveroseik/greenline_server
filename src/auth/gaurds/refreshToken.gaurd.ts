import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";


@Injectable()

export class RefreshTokenGaurd extends AuthGuard('jwt-refresh') {

    constructor(private reflector:Reflector){
        super();
    }

    getRequest(context: ExecutionContext){

        const ctx = GqlExecutionContext.create(context);

        return ctx.getContext().req;
    }
}