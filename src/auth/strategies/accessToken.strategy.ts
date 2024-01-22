import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
// import { PassportStrategy } from "@nestjs/passport";

// import { Strategy, ExtractJwt } from "passport-jwt";

import * as  dotenv from "dotenv";
import { JwtPayload } from "../types/jwtPayload.type";

dotenv.config();


// @Injectable()

// export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt'){

//     // constructor(public config:ConfigService) {

//     //     super({
//     //         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     //         secretOrKey: config.get(process.env.secret_key),
//     //         passReqToCallback: true,
//     //     })
//     // }

//     async validate(payload:JwtPayload) {

//         return payload;
//     }
// }