import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefaultTimestamps9999999999999999997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // const tables = [
        //     'item',
        //     'inventory',
        //     'rack',
        //     'role',
        //     'ballot',
        //     'box',
        //     'itemInBox',
        //     'inventoryHistory',
        //     'order',
        //     'orderRelation',
        //     'orderItem',
        //     'merchant',
        //     'user',
        //     'userAdress',
        //     'courierSheet',
        //     'sheetOrderStatusHistory',
        //     'sheetOrder',
        //     'orderStatus',
        //     'requestStatusHistory',
        //     'request',
        //     'requestTo',
        //     'financialAccount',
        //     'expense',
        //     'financialTransaction',
        //     'financialRequestStatus',
        // ];

        // const onlyCreatedAt = [
        //     'financialRequestStatus', 
        //     "financialTransaction", 
        //     "orderRelation",
        //     "requestStatusHistory",
        //     "sheetOrderStatusHistory"]

        // for (const table of tables) {

        //     if (onlyCreatedAt.includes(table)){
        //         await queryRunner.query(`
        //         ALTER TABLE ${table}
        //         MODIFY COLUMN createdAt timestamp DEFAULT CURRENT_TIMESTAMP;
        //     `);

        //     }else{
        //         await queryRunner.query(`
        //         ALTER TABLE ${table}
        //         MODIFY COLUMN createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        //         MODIFY COLUMN lastModified timestamp DEFAULT CURRENT_TIMESTAMP;
        //     `);
        //     }
            
        // }

        // console.log('Defaults for timestamps set to CURRENT_TIMESTAMP for all tables');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Dropping default values is not recommended as it may lead to data inconsistency.
        // Reversing this migration might not be practical.
        console.log('Reverting this migration might not be practical.');
    }

}