import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1708093794447 implements MigrationInterface {
    name = 'Initial1708093794447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user-role\` (\`userId\` varchar(255) NOT NULL, \`roleId\` int NOT NULL, INDEX \`userId\` (\`userId\`), PRIMARY KEY (\`userId\`, \`roleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(255) NOT NULL, \`type\` enum ('admin', 'finance', 'inventory', 'merchant', 'courier', 'customer', 'customerService') NOT NULL DEFAULT 'customer', \`hubId\` int NULL, \`merchantId\` int NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(15) NOT NULL, \`birthdate\` datetime NOT NULL, \`refreshToken\` varchar(64) NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user-address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` varchar(255) NOT NULL, \`countryId\` int NOT NULL, \`cityId\` int NOT NULL, \`details\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`userId\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courier-sheet\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` varchar(255) NOT NULL, \`status\` enum ('inProgress', 'waitingForAdmin', 'waitingForFinance', 'complete') NOT NULL DEFAULT 'inProgress', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`userId\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sheet-order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`sheetId\` int NOT NULL, \`orderId\` int NOT NULL, \`adminPass\` tinyint NOT NULL DEFAULT 0, \`financePass\` tinyint NOT NULL DEFAULT 0, \`transactionId\` int NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`orderId\` (\`orderId\`), INDEX \`sheetId\` (\`sheetId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sheet-order-status-history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`sheetOrderId\` int NOT NULL, \`status\` enum ('adminAccepted', 'adminRejected', 'financeAccepted', 'financeRejected') NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`userId\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`userId\` (\`userId\`), INDEX \`sheetOrderId\` (\`sheetOrderId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rack\` (\`id\` int NOT NULL AUTO_INCREMENT, \`merchantId\` int NULL, \`inventoryId\` int NOT NULL, \`levels\` int NOT NULL DEFAULT '1', \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`inventoryId\` (\`inventoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`request-status-history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`requestId\` int NOT NULL, \`status\` enum ('sent', 'pending', 'read', 'rejected', 'accepted', 'expired') NOT NULL, \`userId\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`requestId\` (\`requestId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`otherId\` int NULL, \`type\` enum ('delivery', 'exchange', 'refund', 'freeDelivery', 'gift', 'freeOfCharge') NOT NULL DEFAULT 'delivery', \`paymentType\` enum ('cash', 'card', 'free') NOT NULL DEFAULT 'cash', \`userId\` varchar(255) NOT NULL, \`merchantId\` int NOT NULL, \`userAddressId\` int NOT NULL, \`shippingPrice\` decimal(10,2) NOT NULL, \`includesVAT\` tinyint(1) NOT NULL, \`canOpen\` tinyint NOT NULL DEFAULT 0, \`fragile\` tinyint NOT NULL DEFAULT 0, \`deliveryPart\` tinyint NOT NULL DEFAULT 0, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`userAddressId\` (\`userAddressId\`), INDEX \`merchantId\` (\`merchantId\`), INDEX \`userId\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order-status\` (\`id\` int NOT NULL AUTO_INCREMENT, \`orderId\` int NOT NULL, \`status\` enum ('idle', 'shippedFromCourier', 'transferring', 'assignedToCourier', 'outForDelivery', 'delivered', 'partiallyDelivered', 'failedDeliveryAttempt', 'postponed') NOT NULL DEFAULT 'idle', \`description\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`orderId\` (\`orderId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order-relation\` (\`firstOrderId\` int NOT NULL, \`secondOrderId\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`secondOrderId\` (\`secondOrderId\`), PRIMARY KEY (\`firstOrderId\`, \`secondOrderId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`merchant\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`includesVAT\` tinyint(1) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item-price-list\` (\`itemSku\` varchar(255) NOT NULL, \`itemPriceId\` int NOT NULL, INDEX \`itemSku\` (\`itemSku\`), PRIMARY KEY (\`itemSku\`, \`itemPriceId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item\` (\`sku\` varchar(255) NOT NULL, \`merchantSku\` varchar(255) NOT NULL, \`merchantId\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`color\` varchar(50) NULL, \`colorCode\` varchar(50) NULL, \`size\` varchar(15) NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`imageUrl\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`merchantId\` (\`merchantId\`), PRIMARY KEY (\`sku\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order-item\` (\`orderId\` int NOT NULL, \`itemSku\` varchar(255) NOT NULL, \`count\` int NOT NULL, \`frozenPrice\` decimal(10,2) NOT NULL, \`frozenCurrency\` varchar(10) NOT NULL, \`frozenColorHex\` varchar(50) NOT NULL, \`frozenSize\` varchar(10) NOT NULL, \`frozenName\` varchar(10) NOT NULL, \`partial\` tinyint NOT NULL DEFAULT 0, \`partialCount\` int NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`itemSku\` (\`itemSku\`), PRIMARY KEY (\`orderId\`, \`itemSku\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item-in-box\` (\`id\` int NOT NULL AUTO_INCREMENT, \`inventoryId\` int NOT NULL, \`merchantId\` int NULL, \`itemSku\` varchar(255) NOT NULL, \`boxId\` int NOT NULL, \`count\` int NOT NULL, \`minCount\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`boxId\` (\`boxId\`), INDEX \`itemSku\` (\`itemSku\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('notification', 'confirmation', 'authorization', 'subscription', 'verification', 'reminder', 'invitation', 'passwordReset', 'accountUpdate', 'transactionUpdate', 'policyUpdate', 'announcement', 'feedback', 'support', 'marketing', 'survey', 'report', 'inquiry', 'appointment', 'request', 'orderProblem', 'paymentReminder', 'invoice', 'other') NOT NULL DEFAULT 'notification', \`priority\` int NOT NULL, \`fromId\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`extraData\` varchar(255) NULL, \`status\` enum ('sent', 'pending', 'read', 'rejected', 'accepted', 'expired') NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`fromId\` (\`fromId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventory-support\` (\`id\` int NOT NULL AUTO_INCREMENT, \`inventoryId\` int NOT NULL, \`governorateId\` int NOT NULL, \`zoneId\` int NOT NULL, INDEX \`inventoryId\` (\`inventoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventory\` (\`id\` int NOT NULL AUTO_INCREMENT, \`hubId\` int NULL, \`name\` varchar(255) NOT NULL, \`module\` int NOT NULL DEFAULT '0', \`zoneId\` int NULL, \`location\` point NULL, \`rentType\` enum ('item', 'box', 'ballot', 'rack', 'inventory', 'meter') NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventory-price\` (\`id\` int NOT NULL AUTO_INCREMENT, \`inventoryId\` int NOT NULL, \`currency\` varchar(255) NOT NULL, \`pricePerUnit\` decimal(10,2) NOT NULL, \`discount\` decimal(10,2) NULL, \`startDiscount\` timestamp NULL, \`endDiscount\` timestamp NULL, INDEX \`inventoryId\` (\`inventoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hub\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(15) NOT NULL, \`gonvernorateId\` int NOT NULL, \`zoneId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item-price\` (\`id\` int NOT NULL AUTO_INCREMENT, \`currency\` varchar(5) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`discount\` decimal(10,2) NULL, \`startDiscount\` timestamp NULL, \`endDiscount\` timestamp NULL, INDEX \`id\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`expense\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('salary', 'rent', 'utilities', 'officeSupplies', 'vehicleMaintenance', 'fuel', 'insurance', 'equipmentPurchase', 'marketing', 'softwareSubscriptions', 'legalFees', 'training', 'taxes', 'loanRepayments', 'interest', 'officeRent', 'warehouseRent', 'travelExpenses', 'professionalServices', 'maintenance', 'securityServices', 'packagingMaterials', 'cleaningServices', 'wasteDisposal', 'officeEquipment', 'internetServices', 'telecommunication', 'officeFurniture', 'membershipFees', 'professionalDevelopment', 'vehicleLease', 'advertising', 'deliveryExpenses', 'miscellaneous') NOT NULL DEFAULT 'miscellaneous', \`fromAccountId\` int NOT NULL, \`amount\` decimal(10,2) NOT NULL, \`receipt\` varchar(255) NOT NULL, \`comment\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`fromAccountId\` (\`fromAccountId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`financial-transaction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` enum ('deposit', 'withdrawal', 'transfer', 'refund', 'adjustment', 'interest', 'donation', 'conversion', 'reward', 'subscription', 'rent', 'payment', 'other') NOT NULL, \`description\` varchar(255) NOT NULL, \`fromAccountId\` varchar(255) NOT NULL, \`toAccountId\` varchar(255) NOT NULL, \`amount\` decimal(10,2) NULL, \`receipt\` varchar(255) NOT NULL, \`status\` enum ('pendingSender', 'pendingReceiver', 'processingBySender', 'processingByReceiver', 'rejectedBySender', 'rejectedByReceiver', 'cancelledBySender', 'completed', 'failed') NOT NULL, \`approvedById\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`approvedById\` (\`approvedById\`), INDEX \`toAccountId\` (\`toAccountId\`), INDEX \`fromAccountId\` (\`fromAccountId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`financial-account\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`type\` enum ('hub', 'user', 'merchant', 'bank', 'department') NOT NULL, \`userId\` varchar(255) NULL, \`merchantId\` int NULL, \`balance\` decimal(10,2) NOT NULL DEFAULT '0.00', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`merchantId\` (\`merchantId\`), INDEX \`userId\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`financial-request-status\` (\`requestId\` int NOT NULL, \`status\` enum ('pendingSender', 'pendingReceiver', 'processingBySender', 'processingByReceiver', 'rejectedBySender', 'rejectedByReceiver', 'cancelledBySender', 'completed', 'failed') NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`requestId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`inventory-history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`itemInBoxId\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`type\` enum ('firstImport', 'import', 'export') NOT NULL, \`amount\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`itemInBoxId\` (\`itemInBoxId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`box\` (\`id\` int NOT NULL AUTO_INCREMENT, \`merchantId\` int NULL, \`ballotId\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`ballotId\` (\`ballotId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ballot\` (\`id\` int NOT NULL AUTO_INCREMENT, \`merchantId\` int NULL, \`rackId\` int NOT NULL, \`level\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`lastModified\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`rackId\` (\`rackId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sheet-order\` ADD CONSTRAINT \`FK_d347664ae2df273959910ae62ec\` FOREIGN KEY (\`sheetId\`) REFERENCES \`courier-sheet\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventory-support\` ADD CONSTRAINT \`FK_383d06b6150717b195551bba1b4\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`inventory-price\` ADD CONSTRAINT \`FK_2db592d7a0fab6c94ee27225d30\` FOREIGN KEY (\`inventoryId\`) REFERENCES \`inventory\`(\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`inventory-price\` DROP FOREIGN KEY \`FK_2db592d7a0fab6c94ee27225d30\``);
        await queryRunner.query(`ALTER TABLE \`inventory-support\` DROP FOREIGN KEY \`FK_383d06b6150717b195551bba1b4\``);
        await queryRunner.query(`ALTER TABLE \`sheet-order\` DROP FOREIGN KEY \`FK_d347664ae2df273959910ae62ec\``);
        await queryRunner.query(`DROP INDEX \`rackId\` ON \`ballot\``);
        await queryRunner.query(`DROP TABLE \`ballot\``);
        await queryRunner.query(`DROP INDEX \`ballotId\` ON \`box\``);
        await queryRunner.query(`DROP TABLE \`box\``);
        await queryRunner.query(`DROP INDEX \`itemInBoxId\` ON \`inventory-history\``);
        await queryRunner.query(`DROP TABLE \`inventory-history\``);
        await queryRunner.query(`DROP TABLE \`financial-request-status\``);
        await queryRunner.query(`DROP INDEX \`userId\` ON \`financial-account\``);
        await queryRunner.query(`DROP INDEX \`merchantId\` ON \`financial-account\``);
        await queryRunner.query(`DROP TABLE \`financial-account\``);
        await queryRunner.query(`DROP INDEX \`fromAccountId\` ON \`financial-transaction\``);
        await queryRunner.query(`DROP INDEX \`toAccountId\` ON \`financial-transaction\``);
        await queryRunner.query(`DROP INDEX \`approvedById\` ON \`financial-transaction\``);
        await queryRunner.query(`DROP TABLE \`financial-transaction\``);
        await queryRunner.query(`DROP INDEX \`fromAccountId\` ON \`expense\``);
        await queryRunner.query(`DROP TABLE \`expense\``);
        await queryRunner.query(`DROP INDEX \`id\` ON \`item-price\``);
        await queryRunner.query(`DROP TABLE \`item-price\``);
        await queryRunner.query(`DROP TABLE \`hub\``);
        await queryRunner.query(`DROP INDEX \`inventoryId\` ON \`inventory-price\``);
        await queryRunner.query(`DROP TABLE \`inventory-price\``);
        await queryRunner.query(`DROP TABLE \`inventory\``);
        await queryRunner.query(`DROP INDEX \`inventoryId\` ON \`inventory-support\``);
        await queryRunner.query(`DROP TABLE \`inventory-support\``);
        await queryRunner.query(`DROP INDEX \`fromId\` ON \`request\``);
        await queryRunner.query(`DROP TABLE \`request\``);
        await queryRunner.query(`DROP INDEX \`itemSku\` ON \`item-in-box\``);
        await queryRunner.query(`DROP INDEX \`boxId\` ON \`item-in-box\``);
        await queryRunner.query(`DROP TABLE \`item-in-box\``);
        await queryRunner.query(`DROP INDEX \`itemSku\` ON \`order-item\``);
        await queryRunner.query(`DROP TABLE \`order-item\``);
        await queryRunner.query(`DROP INDEX \`merchantId\` ON \`item\``);
        await queryRunner.query(`DROP TABLE \`item\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`itemSku\` ON \`item-price-list\``);
        await queryRunner.query(`DROP TABLE \`item-price-list\``);
        await queryRunner.query(`DROP TABLE \`merchant\``);
        await queryRunner.query(`DROP INDEX \`secondOrderId\` ON \`order-relation\``);
        await queryRunner.query(`DROP TABLE \`order-relation\``);
        await queryRunner.query(`DROP INDEX \`orderId\` ON \`order-status\``);
        await queryRunner.query(`DROP TABLE \`order-status\``);
        await queryRunner.query(`DROP INDEX \`userId\` ON \`order\``);
        await queryRunner.query(`DROP INDEX \`merchantId\` ON \`order\``);
        await queryRunner.query(`DROP INDEX \`userAddressId\` ON \`order\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP INDEX \`requestId\` ON \`request-status-history\``);
        await queryRunner.query(`DROP TABLE \`request-status-history\``);
        await queryRunner.query(`DROP INDEX \`inventoryId\` ON \`rack\``);
        await queryRunner.query(`DROP TABLE \`rack\``);
        await queryRunner.query(`DROP INDEX \`sheetOrderId\` ON \`sheet-order-status-history\``);
        await queryRunner.query(`DROP INDEX \`userId\` ON \`sheet-order-status-history\``);
        await queryRunner.query(`DROP TABLE \`sheet-order-status-history\``);
        await queryRunner.query(`DROP INDEX \`sheetId\` ON \`sheet-order\``);
        await queryRunner.query(`DROP INDEX \`orderId\` ON \`sheet-order\``);
        await queryRunner.query(`DROP TABLE \`sheet-order\``);
        await queryRunner.query(`DROP INDEX \`userId\` ON \`courier-sheet\``);
        await queryRunner.query(`DROP TABLE \`courier-sheet\``);
        await queryRunner.query(`DROP INDEX \`userId\` ON \`user-address\``);
        await queryRunner.query(`DROP TABLE \`user-address\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`userId\` ON \`user-role\``);
        await queryRunner.query(`DROP TABLE \`user-role\``);
    }

}
