import { SetMetadata } from "@nestjs/common";

export const AllowedRoles = (...roles: number[]) => SetMetadata('roles', roles);

export enum Roles {
  admin = 1,
  accessInventory = 2,
  viewInventories = 3,
  addInventories = 4,
  editInventories = 5,
  viewInventoryItems = 6,
  addInventoryItems = 7,
  removeInventoryItems = 8,
  accessMerchant = 9,
  viewMerchantDashboard = 10,
  viewMerchantAccount = 11,
  viewMerchantItems = 12,
  editMerchantItems = 13,
  viewMerchantOrders = 14,
  addMerchantOrders = 15,
  editMerchantOrders = 16,
  accessFinance = 17,
  viewFinanceDashboard = 18,
  viewFinanceAccounts = 19,
  addFinanceAccounts = 20,
  editFinanceAccounts = 21,
  viewFinanceExpenses = 22,
  addFinanceExpenses = 23,
  editFinanceExpenses = 24,
  viewFinanceOrders = 25,
  editFinanceOrders = 26,
  viewFinanceTransactions = 27,
  editFinanceTransactions = 28,
  accessCourier = 29,
  viewCourierDashboard = 30,
  viewCouriers = 31,
  addCouriers = 32,
  editCouriers = 33,
  viewCourierSheet = 34,
  editCourierSheet = 35,
  addCourierSheet = 36,
  addRequest = 37,
  editRequest = 38,
  editRequestStatus = 39,
  addOrder = 40,
  editOrder = 41,
  editOrderStatus = 42,
  accessUserManagement = 43,
  addUser = 44,
  editUser = 45,
  editUserRoles = 46,
  viewMerchantFinance = 47,
  addMerchantUser = 48,
  editMerchantUser = 49,
  editMerchantUserRoles = 50,
  financeAdmin = 51,
  merchantAdmin = 52,
  courierAdmin = 53,
  inventoryAdmin = 54,
}

export class DefinedRoles{
  static UserManagementRoles = [
    Roles.admin, 
    Roles.courierAdmin, Roles.financeAdmin, 
    Roles.merchantAdmin, Roles.inventoryAdmin,
    Roles.editUser, Roles.editUserRoles
  ];
  
  static UserRoleEditors = [
    Roles.admin,
    Roles.courierAdmin, Roles.financeAdmin, 
    Roles.merchantAdmin, Roles.inventoryAdmin,
    Roles.editUserRoles
  ];
}