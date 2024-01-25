import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePointColumnInInventoryTable1706102618193 implements MigrationInterface {

    name = "CreatePointColumnInInventoryTable1706102618193"

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query('ALTER TABLE inventory ADD location POINT');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE inventory DROP COLUMN location`);
    }

}
