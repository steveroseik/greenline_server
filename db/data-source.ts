
import { DataSource, DataSourceOptions  } from "typeorm"
import { registerAs } from "@nestjs/config";
import * as dotenv from 'dotenv';
// import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
dotenv.config();

export const dataConfig:DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: process.env.local_password,
    database: "greenline_db",
    entities: ["./dist/src/**/*.entity{.ts,.js}"],
    migrationsRun: true,
    legacySpatialSupport: false,
    migrationsTransactionMode: "all",
    synchronize: false,
    migrations: ["./dist/db/migrations/**/*.js"],
    migrationsTableName: "migrations",
    //TODO: REMOVE IN PRODUCTION
    // don't
    logging: true
}

export const connectionSource = new DataSource(dataConfig);

export default registerAs('typeorm', () => dataConfig);