
import { DataSource, DataSourceOptions  } from "typeorm"
import { registerAs } from "@nestjs/config";
import * as dotenv from 'dotenv';
dotenv.config();

const dataConfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.local_password,
    database: "greenline_db",
    entities: ["./dist/**/*.entity{.ts,.js}"],
    // migrationsRun: true,
    migrations: ['./dist/db/migrations/*{.ts,.js}'],
    migrationsTableName: "migrations",
    //TODO: REMOVE IN PRODUCTION
    // don't
    logging: true
}

export default registerAs('typeorm', () => dataConfig);

export const connectionSource = new DataSource(dataConfig as DataSourceOptions);