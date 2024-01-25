import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneToUser1706103098567 implements MigrationInterface {
    name = 'AddPhoneToUser1706103098567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone\` varchar(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
    }

}
