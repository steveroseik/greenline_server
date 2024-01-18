
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import * as dotenv from 'dotenv';

dotenv.config();

const config:MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.local_password,
    database: "greenline_db",
    entities: ["./dist/**/*.entity{.ts,.js}"],
    //TODO: REMOVE IN PRODUCTION
    synchronize: true,
    // don't
    logging: true
}

 export default config;