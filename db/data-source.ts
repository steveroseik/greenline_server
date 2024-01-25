
import { DataSource, DataSourceOptions  } from "typeorm"
import { registerAs } from "@nestjs/config";
import * as dotenv from 'dotenv';
import { ApplyTimestampDefaults1706102618191 } from "./migrations/1706102618191-ApplyTimestampDefaults";
import { AddRolesToTable1706102618192 } from "./migrations/1706102618192-AddRolesToTable";
import { CreatePointColumnInInventoryTable1706102618193 } from "./migrations/1706102618193-CreatePointColumnInInventoryTable";
import { AddPhoneToUser1706103098567 } from "./migrations/1706103098567-addPhoneToUser";
// import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
dotenv.config();

export const dataConfig:DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.local_password,
    database: "greenline_db",
    entities: ["./dist/src/**/*.entity{.ts,.js}"],
    migrationsRun: true,
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