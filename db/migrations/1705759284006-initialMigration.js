"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1705759284006 = void 0;
var InitialMigration1705759284006 = /** @class */ (function () {
    function InitialMigration1705759284006() {
        this.name = 'InitialMigration1705759284006';
    }
    InitialMigration1705759284006.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `courierSheet` (`id` int NOT NULL, `userId` varchar(255) NOT NULL, `status` int NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `userId` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `sheetOrderStatusHistory` (`id` int NOT NULL, `sheetOrderId` int NOT NULL, `status` int NOT NULL, `description` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, INDEX `userId` (`userId`), INDEX `sheetOrderId` (`sheetOrderId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `sheetOrder` (`id` int NOT NULL, `sheetId` int NOT NULL, `orderId` int NOT NULL, `latestStatus` int NOT NULL, `createdAt` datetime NOT NULL, INDEX `orderId` (`orderId`), INDEX `sheetId` (`sheetId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `orderStatus` (`id` int NOT NULL, `orderId` int NOT NULL, `status` int NOT NULL, `description` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `orderId` (`orderId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `financialRequestStatus` (`requestId` int NOT NULL, `status` int NOT NULL, `createdAt` timestamp NOT NULL, PRIMARY KEY (`requestId`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `financialTransaction` (`id` int NOT NULL, `type` int NOT NULL, `description` varchar(255) NOT NULL, `fromAccountId` int NOT NULL, `toAccountId` int NOT NULL, `amount` float(12) NOT NULL, `receipt` varchar(255) NOT NULL, `latestStatus` int NOT NULL, `approvedById` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, INDEX `approvedById` (`approvedById`), INDEX `toAccountId` (`toAccountId`), INDEX `fromAccountId` (`fromAccountId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `expense` (`id` int NOT NULL, `type` varchar(255) NOT NULL, `fromAccountId` int NOT NULL, `amount` float(12) NOT NULL, `receipt` varchar(255) NOT NULL, `comment` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, INDEX `fromAccountId` (`fromAccountId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `financialAccount` (`id` int NOT NULL, `name` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `merchantId` int NOT NULL, `balance` float(12) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `merchantId` (`merchantId`), INDEX `userId` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `merchant` (`id` int NOT NULL, `name` varchar(255) NOT NULL, `includesVAT` tinyint(1) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `itemPrices` (`id` int NOT NULL, `itemSku` varchar(255) NOT NULL, `currency` varchar(255) NOT NULL, `price` float(12) NOT NULL, `discount` float(12) NOT NULL, `startDiscount` timestamp NOT NULL, `endDiscount` timestamp NOT NULL, INDEX `itemSku` (`itemSku`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `inventoryHistory` (`id` int NOT NULL, `itemInBoxId` int NOT NULL, `description` varchar(255) NOT NULL, `type` int NOT NULL, `amount` int NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `itemInBoxId` (`itemInBoxId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `inventoryPrices` (`id` int NOT NULL, `inventoryId` int NOT NULL, `currency` varchar(255) NOT NULL, `pricePerUnit` float(12) NOT NULL, `discount` float(12) NOT NULL, `startDiscount` timestamp NOT NULL, `endDiscount` timestamp NOT NULL, INDEX `inventoryId` (`inventoryId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `inventorySupport` (`id` int NOT NULL, `inventoryId` int NOT NULL, `governorateId` int NOT NULL, `zoneId` int NOT NULL, INDEX `inventoryId` (`inventoryId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `inventory` (`id` int NOT NULL, `hubId` int NOT NULL, `name` varchar(255) NOT NULL, `module` int NOT NULL, `zone` varchar(255) NOT NULL, `rentType` int NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `rack` (`id` int NOT NULL, `inventoryId` int NOT NULL, `levels` int NOT NULL, `name` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `inventoryId` (`inventoryId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ballot` (`id` int NOT NULL, `rackId` int NOT NULL, `level` int NOT NULL, `name` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `rackId` (`rackId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `box` (`id` int NOT NULL, `ballotId` int NOT NULL, `name` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `ballotId` (`ballotId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `itemInBox` (`id` int NOT NULL, `itemSku` varchar(255) NOT NULL, `boxId` int NOT NULL, `count` int NOT NULL, `minCount` int NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `boxId` (`boxId`), INDEX `itemSku` (`itemSku`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `item` (`sku` varchar(255) NOT NULL, `merchantSku` varchar(255) NOT NULL, `merchantId` int NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `imageUrl` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `merchantId` (`merchantId`), PRIMARY KEY (`sku`)) ENGINE=InnoDB")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `orderItem` (`orderId` int NOT NULL, `itemSku` varchar(255) NOT NULL, `count` int NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `itemSku` (`itemSku`), PRIMARY KEY (`orderId`, `itemSku`)) ENGINE=InnoDB")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `orderRelation` (`firstOrderId` int NOT NULL, `secondOrderId` int NOT NULL, `createdAt` timestamp NOT NULL, INDEX `secondOrderId` (`secondOrderId`), PRIMARY KEY (`firstOrderId`, `secondOrderId`)) ENGINE=InnoDB")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `order` (`id` int NOT NULL, `otherId` int NOT NULL, `type` int NOT NULL, `userId` varchar(255) NOT NULL, `merchantId` int NOT NULL, `userAddressId` int NOT NULL, `shippingPrice` float(12) NOT NULL, `includesVAT` tinyint(1) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `userAddressId` (`userAddressId`), INDEX `merchantId` (`merchantId`), INDEX `userId` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `userAddress` (`id` int NOT NULL, `userId` varchar(255) NOT NULL, `countryId` int NOT NULL, `cityId` int NOT NULL, `details` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `userId` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `requestStatusHistory` (`id` int NOT NULL, `requestId` int NOT NULL, `status` int NOT NULL, `userId` int NOT NULL, `createdAt` timestamp NOT NULL, INDEX `requestId` (`requestId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `request` (`id` int NOT NULL, `type` int NOT NULL, `priority` int NOT NULL, `fromId` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `status` int NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, INDEX `fromId` (`fromId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `type` int NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `birthdate` datetime NOT NULL, `createdAt` timestamp NOT NULL, `lastModified` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `userRole` (`userId` varchar(255) NOT NULL, `roleId` int NOT NULL, INDEX `userId` (`userId`), PRIMARY KEY (`userId`, `roleId`)) ENGINE=InnoDB")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `requestTo` (`requestId` int NOT NULL, `toId` varchar(255) NOT NULL, INDEX `IDX_b0948e735107443bfd4b56da73` (`requestId`), INDEX `IDX_eef4b47b0a1c58c9b71c1a4930` (`toId`), PRIMARY KEY (`requestId`, `toId`)) ENGINE=InnoDB")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `courierSheet` ADD CONSTRAINT `FK_a47d0847d957c8c131b7fdb8198` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrderStatusHistory` ADD CONSTRAINT `FK_c5320338c30a49742418504f17d` FOREIGN KEY (`sheetOrderId`) REFERENCES `sheetOrder`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrderStatusHistory` ADD CONSTRAINT `FK_e80b14bb26efa9a7cd573d1e259` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrder` ADD CONSTRAINT `FK_30a67e48d918830c0ae1553b5db` FOREIGN KEY (`sheetId`) REFERENCES `courierSheet`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrder` ADD CONSTRAINT `FK_921340992a871353a00bcf9e156` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderStatus` ADD CONSTRAINT `FK_7e8150a61d7f184d1da4b72857a` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialRequestStatus` ADD CONSTRAINT `FK_3bf3f72d1417d6ec542a4665116` FOREIGN KEY (`requestId`) REFERENCES `financialTransaction`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialTransaction` ADD CONSTRAINT `FK_c4519c34e9d07757d22ad3051c8` FOREIGN KEY (`fromAccountId`) REFERENCES `financialAccount`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialTransaction` ADD CONSTRAINT `FK_53bc5369d14ed87f739a5fab849` FOREIGN KEY (`toAccountId`) REFERENCES `financialAccount`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialTransaction` ADD CONSTRAINT `FK_1d185cf3c0bd7a2c5d11e093b3a` FOREIGN KEY (`approvedById`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `expense` ADD CONSTRAINT `FK_345e0519b9b950e285801baafdd` FOREIGN KEY (`fromAccountId`) REFERENCES `financialAccount`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialAccount` ADD CONSTRAINT `FK_a670e57f70920b1fdb08338a2d7` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialAccount` ADD CONSTRAINT `FK_7588fea9c1ee5a7cc525fd031b7` FOREIGN KEY (`merchantId`) REFERENCES `merchant`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `itemPrices` ADD CONSTRAINT `FK_d7d1c68cb76ba4b85f0a1dfdf24` FOREIGN KEY (`itemSku`) REFERENCES `item`(`sku`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `inventoryHistory` ADD CONSTRAINT `FK_e9179ccb81928c0145dc83e3dc6` FOREIGN KEY (`itemInBoxId`) REFERENCES `itemInBox`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `inventoryPrices` ADD CONSTRAINT `FK_0c3a34ac435305e6585a10ef1c4` FOREIGN KEY (`inventoryId`) REFERENCES `inventory`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `inventorySupport` ADD CONSTRAINT `FK_10c0520727e2755079c58846f0d` FOREIGN KEY (`inventoryId`) REFERENCES `inventory`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rack` ADD CONSTRAINT `FK_8c308336a04961a117a7f39221d` FOREIGN KEY (`inventoryId`) REFERENCES `inventory`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ballot` ADD CONSTRAINT `FK_b21481ded566767bcd543497379` FOREIGN KEY (`rackId`) REFERENCES `rack`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `box` ADD CONSTRAINT `FK_b6c0f7a8b3384dc928b79664098` FOREIGN KEY (`ballotId`) REFERENCES `ballot`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `itemInBox` ADD CONSTRAINT `FK_15899cf7865eeec54466eb7045d` FOREIGN KEY (`itemSku`) REFERENCES `item`(`sku`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `itemInBox` ADD CONSTRAINT `FK_ba0b401b3b099499b36d2e361d8` FOREIGN KEY (`boxId`) REFERENCES `box`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `item` ADD CONSTRAINT `FK_86817b70f2eada0540115de6368` FOREIGN KEY (`merchantId`) REFERENCES `merchant`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderItem` ADD CONSTRAINT `FK_ef8ed42ef2c6feafd1447d96279` FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderItem` ADD CONSTRAINT `FK_1867e860af1fbc090ffa878b412` FOREIGN KEY (`itemSku`) REFERENCES `item`(`sku`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderRelation` ADD CONSTRAINT `FK_f1c1c1b0ba56c2f5f9924717e70` FOREIGN KEY (`firstOrderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderRelation` ADD CONSTRAINT `FK_7bc911ae9a06a09f30657a9dee0` FOREIGN KEY (`secondOrderId`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_293ad75db4c3b2aa62996c75ad1` FOREIGN KEY (`merchantId`) REFERENCES `merchant`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `order` ADD CONSTRAINT `FK_a4734288e8248e76b4c7c72390f` FOREIGN KEY (`userAddressId`) REFERENCES `userAddress`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userAddress` ADD CONSTRAINT `FK_8b251cbfcbf880bcdec80cf36c5` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `requestStatusHistory` ADD CONSTRAINT `FK_7aaa47775d9fcc8bfa4bd827586` FOREIGN KEY (`requestId`) REFERENCES `request`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `request` ADD CONSTRAINT `FK_c344f10cc6327fbc7ab6a8bec51` FOREIGN KEY (`fromId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userRole` ADD CONSTRAINT `FK_bc794a2ac3d2f53fc2bc04c3cf4` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userRole` ADD CONSTRAINT `FK_aa72ae0c32996d476c28f12eb78` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `requestTo` ADD CONSTRAINT `FK_b0948e735107443bfd4b56da733` FOREIGN KEY (`requestId`) REFERENCES `request`(`id`) ON DELETE CASCADE ON UPDATE CASCADE")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `requestTo` ADD CONSTRAINT `FK_eef4b47b0a1c58c9b71c1a4930e` FOREIGN KEY (`toId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 66:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InitialMigration1705759284006.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `requestTo` DROP FOREIGN KEY `FK_eef4b47b0a1c58c9b71c1a4930e`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `requestTo` DROP FOREIGN KEY `FK_b0948e735107443bfd4b56da733`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userRole` DROP FOREIGN KEY `FK_aa72ae0c32996d476c28f12eb78`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userRole` DROP FOREIGN KEY `FK_bc794a2ac3d2f53fc2bc04c3cf4`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `request` DROP FOREIGN KEY `FK_c344f10cc6327fbc7ab6a8bec51`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `requestStatusHistory` DROP FOREIGN KEY `FK_7aaa47775d9fcc8bfa4bd827586`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userAddress` DROP FOREIGN KEY `FK_8b251cbfcbf880bcdec80cf36c5`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_a4734288e8248e76b4c7c72390f`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_293ad75db4c3b2aa62996c75ad1`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `order` DROP FOREIGN KEY `FK_caabe91507b3379c7ba73637b84`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderRelation` DROP FOREIGN KEY `FK_7bc911ae9a06a09f30657a9dee0`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderRelation` DROP FOREIGN KEY `FK_f1c1c1b0ba56c2f5f9924717e70`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderItem` DROP FOREIGN KEY `FK_1867e860af1fbc090ffa878b412`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderItem` DROP FOREIGN KEY `FK_ef8ed42ef2c6feafd1447d96279`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `item` DROP FOREIGN KEY `FK_86817b70f2eada0540115de6368`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `itemInBox` DROP FOREIGN KEY `FK_ba0b401b3b099499b36d2e361d8`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `itemInBox` DROP FOREIGN KEY `FK_15899cf7865eeec54466eb7045d`")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `box` DROP FOREIGN KEY `FK_b6c0f7a8b3384dc928b79664098`")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ballot` DROP FOREIGN KEY `FK_b21481ded566767bcd543497379`")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rack` DROP FOREIGN KEY `FK_8c308336a04961a117a7f39221d`")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `inventorySupport` DROP FOREIGN KEY `FK_10c0520727e2755079c58846f0d`")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `inventoryPrices` DROP FOREIGN KEY `FK_0c3a34ac435305e6585a10ef1c4`")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `inventoryHistory` DROP FOREIGN KEY `FK_e9179ccb81928c0145dc83e3dc6`")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `itemPrices` DROP FOREIGN KEY `FK_d7d1c68cb76ba4b85f0a1dfdf24`")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialAccount` DROP FOREIGN KEY `FK_7588fea9c1ee5a7cc525fd031b7`")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialAccount` DROP FOREIGN KEY `FK_a670e57f70920b1fdb08338a2d7`")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `expense` DROP FOREIGN KEY `FK_345e0519b9b950e285801baafdd`")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialTransaction` DROP FOREIGN KEY `FK_1d185cf3c0bd7a2c5d11e093b3a`")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialTransaction` DROP FOREIGN KEY `FK_53bc5369d14ed87f739a5fab849`")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialTransaction` DROP FOREIGN KEY `FK_c4519c34e9d07757d22ad3051c8`")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `financialRequestStatus` DROP FOREIGN KEY `FK_3bf3f72d1417d6ec542a4665116`")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `orderStatus` DROP FOREIGN KEY `FK_7e8150a61d7f184d1da4b72857a`")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrder` DROP FOREIGN KEY `FK_921340992a871353a00bcf9e156`")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrder` DROP FOREIGN KEY `FK_30a67e48d918830c0ae1553b5db`")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrderStatusHistory` DROP FOREIGN KEY `FK_e80b14bb26efa9a7cd573d1e259`")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sheetOrderStatusHistory` DROP FOREIGN KEY `FK_c5320338c30a49742418504f17d`")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `courierSheet` DROP FOREIGN KEY `FK_a47d0847d957c8c131b7fdb8198`")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_eef4b47b0a1c58c9b71c1a4930` ON `requestTo`")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_b0948e735107443bfd4b56da73` ON `requestTo`")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `requestTo`")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userId` ON `userRole`")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `userRole`")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `user`")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `fromId` ON `request`")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `request`")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `requestId` ON `requestStatusHistory`")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `requestStatusHistory`")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userId` ON `userAddress`")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `userAddress`")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userId` ON `order`")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `merchantId` ON `order`")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userAddressId` ON `order`")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `order`")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `secondOrderId` ON `orderRelation`")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `orderRelation`")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `itemSku` ON `orderItem`")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `orderItem`")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `merchantId` ON `item`")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `item`")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `itemSku` ON `itemInBox`")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `boxId` ON `itemInBox`")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `itemInBox`")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ballotId` ON `box`")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `box`")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `rackId` ON `ballot`")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ballot`")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `inventoryId` ON `rack`")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `rack`")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `inventory`")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `inventoryId` ON `inventorySupport`")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `inventorySupport`")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `inventoryId` ON `inventoryPrices`")];
                    case 72:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `inventoryPrices`")];
                    case 73:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `itemInBoxId` ON `inventoryHistory`")];
                    case 74:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `inventoryHistory`")];
                    case 75:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `itemSku` ON `itemPrices`")];
                    case 76:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `itemPrices`")];
                    case 77:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `merchant`")];
                    case 78:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userId` ON `financialAccount`")];
                    case 79:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `merchantId` ON `financialAccount`")];
                    case 80:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `financialAccount`")];
                    case 81:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `fromAccountId` ON `expense`")];
                    case 82:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `expense`")];
                    case 83:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `fromAccountId` ON `financialTransaction`")];
                    case 84:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `toAccountId` ON `financialTransaction`")];
                    case 85:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `approvedById` ON `financialTransaction`")];
                    case 86:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `financialTransaction`")];
                    case 87:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `financialRequestStatus`")];
                    case 88:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `orderId` ON `orderStatus`")];
                    case 89:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `orderStatus`")];
                    case 90:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `sheetId` ON `sheetOrder`")];
                    case 91:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `orderId` ON `sheetOrder`")];
                    case 92:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `sheetOrder`")];
                    case 93:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `sheetOrderId` ON `sheetOrderStatusHistory`")];
                    case 94:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userId` ON `sheetOrderStatusHistory`")];
                    case 95:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `sheetOrderStatusHistory`")];
                    case 96:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `userId` ON `courierSheet`")];
                    case 97:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `courierSheet`")];
                    case 98:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `role`")];
                    case 99:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return InitialMigration1705759284006;
}());
exports.InitialMigration1705759284006 = InitialMigration1705759284006;
//# sourceMappingURL=1705759284006-initialMigration.js.map