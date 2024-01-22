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
exports.InsertRoles1705759284008 = void 0;
var InsertRoles1705759284008 = /** @class */ (function () {
    function InsertRoles1705759284008() {
        this.name = 'InsertRoles1705759284008';
    }
    InsertRoles1705759284008.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      INSERT INTO role (id, name, type, description) VALUES\n      (1, 'admin', 'super', 'Super admin with full access'),\n      (2, 'accessInventory', 'inventory', 'Can access the inventory module'),\n      (3, 'viewInventories', 'inventory', 'Can view inventories'),\n      (4, 'addInventories', 'inventory', 'Can add new inventories'),\n      (5, 'editInventories', 'inventory', 'Can edit existing inventories'),\n      (6, 'viewInventoryItems', 'inventory', 'Can view items'),\n      (7, 'addInventoryItems', 'inventory', 'Can add new items'),\n      (8, 'removeInventoryItems', 'inventory', 'Can remove items'),\n      (9, 'accessMerchant', 'merchant', 'Can access the merchant module'),\n      (10, 'viewMerchantDashboard', 'merchant', 'Can view the merchant dashboard'),\n      (11, 'viewMerchantAccount', 'merchant', 'Can view merchant account details'),\n      (12, 'viewMerchantItems', 'merchant', 'Can view merchant items'),\n      (13, 'editMerchantItems', 'merchant', 'Can edit merchant items'),\n      (14, 'viewMerchantOrders', 'merchant', 'Can view merchant orders'),\n      (15, 'addMerchantOrders', 'merchant', 'Can add new merchant orders'),\n      (16, 'editMerchantOrders', 'merchant', 'Can edit merchant orders'),\n      (17, 'accessFinance', 'finance', 'Can access the finance module'),\n      (18, 'viewFinanceDashboard', 'finance', 'Can view the finance dashboard'),\n      (19, 'viewFinanceAccounts', 'finance', 'Can view finance accounts'),\n      (20, 'addFinanceAccounts', 'finance', 'Can add new finance accounts'),\n      (21, 'editFinanceAccounts', 'finance', 'Can edit finance accounts'),\n      (22, 'viewFinanceExpenses', 'finance', 'Can view finance expenses'),\n      (23, 'addFinanceExpenses', 'finance', 'Can add new finance expenses'),\n      (24, 'editFinanceExpenses', 'finance', 'Can edit finance expenses'),\n      (25, 'viewFinanceOrders', 'finance', 'Can view finance orders'),\n      (26, 'editFinanceOrders', 'finance', 'Can edit finance orders'),\n      (27, 'viewFinanceTransactions', 'finance', 'Can view finance transactions'),\n      (28, 'editFinanceTransactions', 'finance', 'Can edit finance transactions'),\n      (29, 'accessCourier', 'courier', 'Can access the courier module'),\n      (30, 'viewCourierDashboard', 'courier', 'Can view the courier dashboard'),\n      (31, 'viewCouriers', 'courier', 'Can view couriers'),\n      (32, 'addCouriers', 'courier', 'Can add new couriers'),\n      (33, 'editCouriers', 'courier', 'Can edit couriers'),\n      (34, 'viewCourierSheet', 'courier', 'Can view courier sheets'),\n      (35, 'editCourierSheet', 'courier', 'Can edit courier sheets'),\n      (36, 'addCourierSheet', 'courier', 'Can add new courier sheets'),\n      (37, 'addRequest', 'requests', 'Can add new requests'),\n      (38, 'editRequest', 'requests', 'Can edit requests'),\n      (39, 'editRequestStatus', 'requests', 'Can edit request statuses'),\n      (40, 'addOrder', 'order', 'Can add new orders'),\n      (41, 'editOrder', 'order', 'Can edit orders'),\n      (42, 'editOrderStatus', 'order', 'Can edit order statuses'),\n      (43, 'accessUserManagement', 'management', 'Can access user management'),\n      (44, 'addUser', 'management', 'Can add new user'),\n      (45, 'editUser', 'management', 'Can edit users'),\n      (46, 'editUserRoles', 'management', 'Can edit user roles');\n    ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertRoles1705759284008.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return InsertRoles1705759284008;
}());
exports.InsertRoles1705759284008 = InsertRoles1705759284008;
//# sourceMappingURL=1705759284008-AddRolesToTable.js.map