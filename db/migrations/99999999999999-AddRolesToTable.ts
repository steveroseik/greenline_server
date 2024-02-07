import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRolesToTable99999999999999 implements MigrationInterface {
  
  name = 'AddRolesToTable99999999999999';
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO role (id, name, type, description) VALUES
      (1, 'admin', 'super', 'Super admin with full access'),
      (2, 'accessInventory', 'inventory', 'Can access the inventory module'),
      (3, 'viewInventories', 'inventory', 'Can view inventories'),
      (4, 'addInventories', 'inventory', 'Can add new inventories'),
      (5, 'editInventories', 'inventory', 'Can edit existing inventories'),
      (6, 'viewInventoryItems', 'inventory', 'Can view items'),
      (7, 'addInventoryItems', 'inventory', 'Can add new items'),
      (8, 'removeInventoryItems', 'inventory', 'Can remove items'),
      (9, 'accessMerchant', 'merchant', 'Can access the merchant module'),
      (10, 'viewMerchantDashboard', 'merchant', 'Can view the merchant dashboard'),
      (11, 'viewMerchantAccount', 'merchant', 'Can view merchant account details'),
      (12, 'viewMerchantItems', 'merchant', 'Can view merchant items'),
      (13, 'editMerchantItems', 'merchant', 'Can edit merchant items'),
      (14, 'viewMerchantOrders', 'merchant', 'Can view merchant orders'),
      (15, 'addMerchantOrders', 'merchant', 'Can add new merchant orders'),
      (16, 'editMerchantOrders', 'merchant', 'Can edit merchant orders'),
      (17, 'accessFinance', 'finance', 'Can access the finance module'),
      (18, 'viewFinanceDashboard', 'finance', 'Can view the finance dashboard'),
      (19, 'viewFinanceAccounts', 'finance', 'Can view finance accounts'),
      (20, 'addFinanceAccounts', 'finance', 'Can add new finance accounts'),
      (21, 'editFinanceAccounts', 'finance', 'Can edit finance accounts'),
      (22, 'viewFinanceExpenses', 'finance', 'Can view finance expenses'),
      (23, 'addFinanceExpenses', 'finance', 'Can add new finance expenses'),
      (24, 'editFinanceExpenses', 'finance', 'Can edit finance expenses'),
      (25, 'viewFinanceOrders', 'finance', 'Can view finance orders'),
      (26, 'editFinanceOrders', 'finance', 'Can edit finance orders'),
      (27, 'viewFinanceTransactions', 'finance', 'Can view finance transactions'),
      (28, 'editFinanceTransactions', 'finance', 'Can edit finance transactions'),
      (29, 'accessCourier', 'courier', 'Can access the courier module'),
      (30, 'viewCourierDashboard', 'courier', 'Can view the courier dashboard'),
      (31, 'viewCouriers', 'courier', 'Can view couriers'),
      (32, 'addCouriers', 'courier', 'Can add new couriers'),
      (33, 'editCouriers', 'courier', 'Can edit couriers'),
      (34, 'viewCourierSheet', 'courier', 'Can view courier sheets'),
      (35, 'editCourierSheet', 'courier', 'Can edit courier sheets'),
      (36, 'addCourierSheet', 'courier', 'Can add new courier sheets'),
      (37, 'addRequest', 'requests', 'Can add new requests'),
      (38, 'editRequest', 'requests', 'Can edit requests'),
      (39, 'editRequestStatus', 'requests', 'Can edit request statuses'),
      (40, 'addOrder', 'order', 'Can add new orders'),
      (41, 'editOrder', 'order', 'Can edit orders'),
      (42, 'editOrderStatus', 'order', 'Can edit order statuses'),
      (43, 'accessUserManagement', 'management', 'Can access user management'),
      (44, 'addUser', 'management', 'Can add new user'),
      (45, 'editUser', 'management', 'Can edit users'),
      (46, 'editUserRoles', 'management', 'Can edit user roles'),
      (47, 'viewMerchantFinance', 'merchant', 'Can view merchant financial account details'),
      (48, 'addMerchantUser', 'merchant', 'Can add new merchant user'),
      (49, 'editMerchantUser', 'merchant', 'Can edit merchant users'),
      (50, 'editMerchantUserRoles', 'merchant', 'Can edit merchant user roles'),
      (51, 'financeAdmin', 'finance', 'Finance full access'),
      (52, 'merchantAdmin', 'merchant', 'Merchant full access'),
      (53, 'courierAdmin', 'courier', 'Courier full access'),
      (54, 'inventoryAdmin', 'inventory', 'Inventory full access');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // You can implement the logic to revert the changes in the down method if needed.
  }
}