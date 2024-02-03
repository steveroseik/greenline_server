import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1706102618190 implements MigrationInterface {
    name = 'Initial1706102618190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`courierSheet\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD \`createdAt\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`financialRequestStatus\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`expense\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`merchant\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`merchant\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderItem\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderItem\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`box\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`box\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ballot\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ballot\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rack\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rack\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventory\` CHANGE \`location\` \`location\` point NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventory\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventory\` CHANGE \`lastModified\` \`lastModified\` timestamp NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inventory\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`inventory\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`inventory\` CHANGE \`location\` \`location\` point NULL`);
        await queryRunner.query(`ALTER TABLE \`rack\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`rack\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`ballot\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`ballot\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`box\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`box\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`orderItem\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`orderItem\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`merchant\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`merchant\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`expense\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`financialRequestStatus\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` CHANGE \`lastModified\` \`lastModified\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` CHANGE \`createdAt\` \`createdAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
    }

}
