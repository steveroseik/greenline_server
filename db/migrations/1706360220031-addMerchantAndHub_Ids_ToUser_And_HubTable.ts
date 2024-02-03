import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMerchantAndHubIdsToUserAndHubTable1706360220031 implements MigrationInterface {
    name = 'AddMerchantAndHubIdsToUserAndHubTable1706360220031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`hub\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(15) NOT NULL, \`gonvernorateId\` int NOT NULL, \`zoneId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`hubId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`merchantId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`deletedAt\` timestamp NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`merchantId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`hubId\``);
        await queryRunner.query(`DROP TABLE \`hub\``);
    }

}
