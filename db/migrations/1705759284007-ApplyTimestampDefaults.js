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
exports.SetDefaultTimestamps1705759284007 = void 0;
var SetDefaultTimestamps1705759284007 = /** @class */ (function () {
    function SetDefaultTimestamps1705759284007() {
        this.name = 'InitialMigration1705759284007';
    }
    SetDefaultTimestamps1705759284007.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var tables, onlyCreatedAt, _i, tables_1, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tables = [
                            'item',
                            'inventory',
                            'rack',
                            'role',
                            'ballot',
                            'box',
                            'itemInBox',
                            'inventoryHistory',
                            'order',
                            'orderRelation',
                            'orderItem',
                            'merchant',
                            'user',
                            'userAddress',
                            'courierSheet',
                            'sheetOrderStatusHistory',
                            'sheetOrder',
                            'orderStatus',
                            'requestStatusHistory',
                            'request',
                            'financialAccount',
                            'expense',
                            'financialTransaction',
                            'financialRequestStatus',
                        ];
                        onlyCreatedAt = [
                            'financialRequestStatus',
                            "financialTransaction",
                            "orderRelation",
                            "requestStatusHistory",
                            "sheetOrderStatusHistory",
                            "sheetOrder",
                            "expense"
                        ];
                        _i = 0, tables_1 = tables;
                        _a.label = 1;
                    case 1:
                        if (!(_i < tables_1.length)) return [3 /*break*/, 6];
                        table = tables_1[_i];
                        if (!onlyCreatedAt.includes(table)) return [3 /*break*/, 3];
                        return [4 /*yield*/, queryRunner.query("\n                ALTER TABLE `".concat(table, "`\n                MODIFY COLUMN createdAt timestamp DEFAULT CURRENT_TIMESTAMP;\n            "))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, queryRunner.query("\n                ALTER TABLE `".concat(table, "`\n                MODIFY COLUMN createdAt timestamp DEFAULT CURRENT_TIMESTAMP,\n                MODIFY COLUMN lastModified timestamp DEFAULT CURRENT_TIMESTAMP;\n            "))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        console.log('Defaults for timestamps set to CURRENT_TIMESTAMP for all tables');
                        return [2 /*return*/];
                }
            });
        });
    };
    SetDefaultTimestamps1705759284007.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Dropping default values is not recommended as it may lead to data inconsistency.
                // Reversing this migration might not be practical.
                console.log('Reverting this migration might not be practical.');
                return [2 /*return*/];
            });
        });
    };
    return SetDefaultTimestamps1705759284007;
}());
exports.SetDefaultTimestamps1705759284007 = SetDefaultTimestamps1705759284007;
//# sourceMappingURL=1705759284007-ApplyTimestampDefaults.js.map