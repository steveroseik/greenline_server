import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePointColumnInInventoryTable1705759284009 implements MigrationInterface {

    name = "CreatePointColumnInInventoryTable1705759284009"

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query('ALTER TABLE inventory ADD location POINT');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE inventory DROP COLUMN location`);
    }

}
