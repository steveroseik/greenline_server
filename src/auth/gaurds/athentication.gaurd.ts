import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";



@Injectable()
export class AuthenticationGaurd implements CanActivate {



    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = GqlExecutionContext.create(context);

        console.log(request.getContext().req);
        return false;
    }

}