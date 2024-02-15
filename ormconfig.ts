
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import * as dotenv from 'dotenv';
dotenv.config();

const config:MysqlConnectionOptions = {

    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: process.env.local_password,
    database: "greenline_db",
    entities: ["./dist/**/*.entity{.ts,.js}"],
    //TODO: REMOVE IN PRODUCTION
    synchronize: true,
    logging: true,
}

 export default config;

//  export default data;