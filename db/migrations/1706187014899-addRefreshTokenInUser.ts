import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRefreshTokenInUser1706187014899 implements MigrationInterface {
    name = 'AddRefreshTokenInUser1706187014899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refreshToken\` varchar(64)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refreshToken\``);
    }

}
