import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateItemPriceTable1706454949643 implements MigrationInterface {
    name = 'UpdateItemPriceTable1706454949643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`itemPrice\` (\`id\` int NOT NULL AUTO_INCREMENT, \`itemSku\` varchar(255) NOT NULL, \`currency\` varchar(255) NOT NULL, \`price\` float(12) NOT NULL, \`discount\` float(12) NULL, \`startDiscount\` timestamp NULL, \`endDiscount\` timestamp NULL, INDEX \`itemSku\` (\`itemSku\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`itemPrice\` ADD CONSTRAINT \`FK_46d7f380b9b43af92ed070f1d41\` FOREIGN KEY (\`itemSku\`) REFERENCES \`item\`(\`sku\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`itemPrice\` DROP FOREIGN KEY \`FK_46d7f380b9b43af92ed070f1d41\``);
        await queryRunner.query(`DROP TABLE \`itemPrice\``);
    }

}
