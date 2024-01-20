import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePointColumnInInventoryTable9999999999999999999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query('ALTER TABLE inventory ADD location POINT');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE inventory DROP COLUMN location`);
    }

}
