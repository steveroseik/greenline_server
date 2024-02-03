import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePrimaryColumnsToAutoGenerate1706452140939 implements MigrationInterface {
    name = 'ChangePrimaryColumnsToAutoGenerate1706452140939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userRole\` DROP FOREIGN KEY \`FK_aa72ae0c32996d476c28f12eb78\``);
        await queryRunner.query(`ALTER TABLE \`userRole\` DROP FOREIGN KEY \`FK_bc794a2ac3d2f53fc2bc04c3cf4\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP FOREIGN KEY \`FK_30a67e48d918830c0ae1553b5db\``);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` DROP FOREIGN KEY \`FK_c5320338c30a49742418504f17d\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`financialRequestStatus\` DROP FOREIGN KEY \`FK_3bf3f72d1417d6ec542a4665116\``);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`expense\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`expense\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`expense\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP FOREIGN KEY \`FK_53bc5369d14ed87f739a5fab849\``);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP FOREIGN KEY \`FK_c4519c34e9d07757d22ad3051c8\``);
        await queryRunner.query(`ALTER TABLE \`expense\` DROP FOREIGN KEY \`FK_345e0519b9b950e285801baafdd\``);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`financialAccount\` DROP FOREIGN KEY \`FK_7588fea9c1ee5a7cc525fd031b7\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_86817b70f2eada0540115de6368\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_293ad75db4c3b2aa62996c75ad1\``);
        await queryRunner.query(`ALTER TABLE \`merchant\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`merchant\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`merchant\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`itemPrices\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`itemPrices\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`itemPrices\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` DROP FOREIGN KEY \`FK_0c3a34ac435305e6585a10ef1c4\``);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` DROP FOREIGN KEY \`FK_10c0520727e2755079c58846f0d\``);
        await queryRunner.query(`ALTER TABLE \`rack\` DROP FOREIGN KEY \`FK_8c308336a04961a117a7f39221d\``);
        await queryRunner.query(`ALTER TABLE \`inventory\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`inventory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventory\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`ballot\` DROP FOREIGN KEY \`FK_b21481ded566767bcd543497379\``);
        await queryRunner.query(`ALTER TABLE \`rack\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`rack\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rack\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`box\` DROP FOREIGN KEY \`FK_b6c0f7a8b3384dc928b79664098\``);
        await queryRunner.query(`ALTER TABLE \`ballot\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`ballot\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`ballot\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`itemInBox\` DROP FOREIGN KEY \`FK_ba0b401b3b099499b36d2e361d8\``);
        await queryRunner.query(`ALTER TABLE \`box\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`box\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`box\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` DROP FOREIGN KEY \`FK_e9179ccb81928c0145dc83e3dc6\``);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP FOREIGN KEY \`FK_921340992a871353a00bcf9e156\``);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` DROP FOREIGN KEY \`FK_7e8150a61d7f184d1da4b72857a\``);
        await queryRunner.query(`ALTER TABLE \`orderItem\` DROP FOREIGN KEY \`FK_ef8ed42ef2c6feafd1447d96279\``);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` DROP FOREIGN KEY \`FK_7bc911ae9a06a09f30657a9dee0\``);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` DROP FOREIGN KEY \`FK_f1c1c1b0ba56c2f5f9924717e70\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_a4734288e8248e76b4c7c72390f\``);
        await queryRunner.query(`ALTER TABLE \`userAddress\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`userAddress\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` DROP FOREIGN KEY \`FK_7aaa47775d9fcc8bfa4bd827586\``);
        await queryRunner.query(`ALTER TABLE \`requestTo\` DROP FOREIGN KEY \`FK_b0948e735107443bfd4b56da733\``);
        await queryRunner.query(`ALTER TABLE \`request\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`request\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`request\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` ADD CONSTRAINT \`FK_c5320338c30a49742418504f17d\` FOREIGN KEY (\`sheetOrderId\`) REFERENCES \`sheetOrder\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD CONSTRAINT \`FK_30a67e48d918830c0ae1553b5db\` FOREIGN KEY (\`sheetId\`) REFERENCES \`courierSheet\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD CONSTRAINT \`FK_921340992a871353a00bcf9e156\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` ADD CONSTRAINT \`FK_7e8150a61d7f184d1da4b72857a\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialRequestStatus\` ADD CONSTRAINT \`FK_3bf3f72d1417d6ec542a4665116\` FOREIGN KEY (\`requestId\`) REFERENCES \`financialTransaction\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD CONSTRAINT \`FK_c4519c34e9d07757d22ad3051c8\` FOREIGN KEY (\`fromAccountId\`) REFERENCES \`financialAccount\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD CONSTRAINT \`FK_53bc5369d14ed87f739a5fab849\` FOREIGN KEY (\`toAccountId\`) REFERENCES \`financialAccount\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`expense\` ADD CONSTRAINT \`FK_345e0519b9b950e285801baafdd\` FOREIGN KEY (\`fromAccountId\`) REFERENCES \`financialAccount\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` ADD CONSTRAINT \`FK_7588fea9c1ee5a7cc525fd031b7\` FOREIGN KEY (\`merchantId\`) REFERENCES \`merchant\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` ADD CONSTRAINT \`FK_e9179ccb81928c0145dc83e3dc6\` FOREIGN KEY (\`itemInBoxId\`) REFERENCES \`itemInBox\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` ADD CONSTRAINT \`FK_0c3a34ac435305e6585a10ef1c4\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` ADD CONSTRAINT \`FK_10c0520727e2755079c58846f0d\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`rack\` ADD CONSTRAINT \`FK_8c308336a04961a117a7f39221d\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`ballot\` ADD CONSTRAINT \`FK_b21481ded566767bcd543497379\` FOREIGN KEY (\`rackId\`) REFERENCES \`rack\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`box\` ADD CONSTRAINT \`FK_b6c0f7a8b3384dc928b79664098\` FOREIGN KEY (\`ballotId\`) REFERENCES \`ballot\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` ADD CONSTRAINT \`FK_ba0b401b3b099499b36d2e361d8\` FOREIGN KEY (\`boxId\`) REFERENCES \`box\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_86817b70f2eada0540115de6368\` FOREIGN KEY (\`merchantId\`) REFERENCES \`merchant\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderItem\` ADD CONSTRAINT \`FK_ef8ed42ef2c6feafd1447d96279\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` ADD CONSTRAINT \`FK_f1c1c1b0ba56c2f5f9924717e70\` FOREIGN KEY (\`firstOrderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` ADD CONSTRAINT \`FK_7bc911ae9a06a09f30657a9dee0\` FOREIGN KEY (\`secondOrderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_293ad75db4c3b2aa62996c75ad1\` FOREIGN KEY (\`merchantId\`) REFERENCES \`merchant\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_a4734288e8248e76b4c7c72390f\` FOREIGN KEY (\`userAddressId\`) REFERENCES \`userAddress\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` ADD CONSTRAINT \`FK_7aaa47775d9fcc8bfa4bd827586\` FOREIGN KEY (\`requestId\`) REFERENCES \`request\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`requestTo\` ADD CONSTRAINT \`FK_b0948e735107443bfd4b56da733\` FOREIGN KEY (\`requestId\`) REFERENCES \`request\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`requestTo\` DROP FOREIGN KEY \`FK_b0948e735107443bfd4b56da733\``);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` DROP FOREIGN KEY \`FK_7aaa47775d9fcc8bfa4bd827586\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_a4734288e8248e76b4c7c72390f\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_293ad75db4c3b2aa62996c75ad1\``);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` DROP FOREIGN KEY \`FK_7bc911ae9a06a09f30657a9dee0\``);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` DROP FOREIGN KEY \`FK_f1c1c1b0ba56c2f5f9924717e70\``);
        await queryRunner.query(`ALTER TABLE \`orderItem\` DROP FOREIGN KEY \`FK_ef8ed42ef2c6feafd1447d96279\``);
        await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_86817b70f2eada0540115de6368\``);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` DROP FOREIGN KEY \`FK_ba0b401b3b099499b36d2e361d8\``);
        await queryRunner.query(`ALTER TABLE \`box\` DROP FOREIGN KEY \`FK_b6c0f7a8b3384dc928b79664098\``);
        await queryRunner.query(`ALTER TABLE \`ballot\` DROP FOREIGN KEY \`FK_b21481ded566767bcd543497379\``);
        await queryRunner.query(`ALTER TABLE \`rack\` DROP FOREIGN KEY \`FK_8c308336a04961a117a7f39221d\``);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` DROP FOREIGN KEY \`FK_10c0520727e2755079c58846f0d\``);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` DROP FOREIGN KEY \`FK_0c3a34ac435305e6585a10ef1c4\``);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` DROP FOREIGN KEY \`FK_e9179ccb81928c0145dc83e3dc6\``);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` DROP FOREIGN KEY \`FK_7588fea9c1ee5a7cc525fd031b7\``);
        await queryRunner.query(`ALTER TABLE \`expense\` DROP FOREIGN KEY \`FK_345e0519b9b950e285801baafdd\``);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP FOREIGN KEY \`FK_53bc5369d14ed87f739a5fab849\``);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP FOREIGN KEY \`FK_c4519c34e9d07757d22ad3051c8\``);
        await queryRunner.query(`ALTER TABLE \`financialRequestStatus\` DROP FOREIGN KEY \`FK_3bf3f72d1417d6ec542a4665116\``);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` DROP FOREIGN KEY \`FK_7e8150a61d7f184d1da4b72857a\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP FOREIGN KEY \`FK_921340992a871353a00bcf9e156\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP FOREIGN KEY \`FK_30a67e48d918830c0ae1553b5db\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` DROP FOREIGN KEY \`FK_c5320338c30a49742418504f17d\``);
        
        await queryRunner.query(`ALTER TABLE \`request\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`request\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`requestTo\` ADD CONSTRAINT \`FK_b0948e735107443bfd4b56da733\` FOREIGN KEY (\`requestId\`) REFERENCES \`request\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` ADD CONSTRAINT \`FK_7aaa47775d9fcc8bfa4bd827586\` FOREIGN KEY (\`requestId\`) REFERENCES \`request\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`requestStatusHistory\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`userAddress\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userAddress\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_a4734288e8248e76b4c7c72390f\` FOREIGN KEY (\`userAddressId\`) REFERENCES \`userAddress\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` ADD CONSTRAINT \`FK_f1c1c1b0ba56c2f5f9924717e70\` FOREIGN KEY (\`firstOrderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderRelation\` ADD CONSTRAINT \`FK_7bc911ae9a06a09f30657a9dee0\` FOREIGN KEY (\`secondOrderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderItem\` ADD CONSTRAINT \`FK_ef8ed42ef2c6feafd1447d96279\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` ADD CONSTRAINT \`FK_7e8150a61d7f184d1da4b72857a\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD CONSTRAINT \`FK_921340992a871353a00bcf9e156\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` ADD CONSTRAINT \`FK_e9179ccb81928c0145dc83e3dc6\` FOREIGN KEY (\`itemInBoxId\`) REFERENCES \`itemInBox\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`box\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`box\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`box\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`itemInBox\` ADD CONSTRAINT \`FK_ba0b401b3b099499b36d2e361d8\` FOREIGN KEY (\`boxId\`) REFERENCES \`box\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`ballot\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`ballot\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ballot\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`box\` ADD CONSTRAINT \`FK_b6c0f7a8b3384dc928b79664098\` FOREIGN KEY (\`ballotId\`) REFERENCES \`ballot\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`rack\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rack\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rack\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`ballot\` ADD CONSTRAINT \`FK_b21481ded566767bcd543497379\` FOREIGN KEY (\`rackId\`) REFERENCES \`rack\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventory\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventory\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`rack\` ADD CONSTRAINT \`FK_8c308336a04961a117a7f39221d\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` ADD CONSTRAINT \`FK_10c0520727e2755079c58846f0d\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` ADD CONSTRAINT \`FK_0c3a34ac435305e6585a10ef1c4\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventorySupport\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventoryPrices\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`inventoryHistory\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`itemPrices\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`itemPrices\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`itemPrices\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`merchant\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`merchant\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`merchant\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_293ad75db4c3b2aa62996c75ad1\` FOREIGN KEY (\`merchantId\`) REFERENCES \`merchant\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`item\` ADD CONSTRAINT \`FK_86817b70f2eada0540115de6368\` FOREIGN KEY (\`merchantId\`) REFERENCES \`merchant\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` ADD CONSTRAINT \`FK_7588fea9c1ee5a7cc525fd031b7\` FOREIGN KEY (\`merchantId\`) REFERENCES \`merchant\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`financialAccount\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`expense\` ADD CONSTRAINT \`FK_345e0519b9b950e285801baafdd\` FOREIGN KEY (\`fromAccountId\`) REFERENCES \`financialAccount\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD CONSTRAINT \`FK_c4519c34e9d07757d22ad3051c8\` FOREIGN KEY (\`fromAccountId\`) REFERENCES \`financialAccount\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD CONSTRAINT \`FK_53bc5369d14ed87f739a5fab849\` FOREIGN KEY (\`toAccountId\`) REFERENCES \`financialAccount\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`expense\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`expense\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`expense\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`financialTransaction\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`financialRequestStatus\` ADD CONSTRAINT \`FK_3bf3f72d1417d6ec542a4665116\` FOREIGN KEY (\`requestId\`) REFERENCES \`financialTransaction\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderStatus\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` ADD CONSTRAINT \`FK_c5320338c30a49742418504f17d\` FOREIGN KEY (\`sheetOrderId\`) REFERENCES \`sheetOrder\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sheetOrderStatusHistory\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`courierSheet\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`sheetOrder\` ADD CONSTRAINT \`FK_30a67e48d918830c0ae1553b5db\` FOREIGN KEY (\`sheetId\`) REFERENCES \`courierSheet\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`userRole\` ADD CONSTRAINT \`FK_bc794a2ac3d2f53fc2bc04c3cf4\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`userRole\` ADD CONSTRAINT \`FK_aa72ae0c32996d476c28f12eb78\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
