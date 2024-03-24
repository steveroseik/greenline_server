import { registerEnumType } from "@nestjs/graphql";

export enum CourierSheetStatus {
    inProgress = "inProgress",
    waitingForAdmin = "waitingForAdmin",
    waitingForFinance = "waitingForFinance",
    complete = "complete"
}

registerEnumType(CourierSheetStatus, {
    name: 'CourierSheetStatus',
  }); 

export enum SheetOrderStatus {
    
    adminAccepted = "adminAccepted",
    adminRejected = "adminRejected",
    financeAccepted = "financeAccepted",
    financeRejected = "financeRejected"

}

registerEnumType(SheetOrderStatus, {
    name: 'SheetOrderStatus',
  }); 

  export enum OrderStatusEnum{
    idle = "idle",
    shippedFromCourier = "shippedFromCourier",
    transferring = "transferring",
    assignedToCourier = "assignedToCourier",
    outForDelivery = "outForDelivery",
    delivered = "delivered",
    partiallyDelivered = "partiallyDelivered",
    failedDeliveryAttempt = "failedDeliveryAttempt",
    postponed = "postponed",
}

registerEnumType(OrderStatusEnum, {
    name: 'OrderStatusEnum',
  }); 


export enum TransactionStatus {

    pendingSender = "pendingSender",
    pendingReceiver = "pendingReceiver",
    processingBySender = "processingBySender",
    processingByReceiver = "processingByReceiver",
    rejectedBySender = "rejectedBySender",
    rejectedByReceiver = "rejectedByReceiver",
    cancelledBySender = "cancelledBySender",
    completed = "completed",
    failed = "failed" 
}
registerEnumType(TransactionStatus, {
    name: 'TransactionStatus',
  });

export enum TransactionType {
    deposit = "deposit",
    withdrawal = "withdrawal",
    transfer = "transfer",
    refund = "refund",
    adjustment = "adjustment",
    interest = "interest",
    donation = "donation",
    conversion = "conversion",
    reward = "reward",
    subscription = "subscription",
    rent = "rent",
    payment = "payment",
    other = "other"
}

registerEnumType(TransactionType, {
    name: 'TransactionType',
  });

export enum ExpenseType {
    // Expenses Types
    salary = "salary", // Payment to employees
    rent = "rent", // Payment for renting office space or warehouses
    utilities = "utilities", // Payment for water supply, electricity, gas, etc.
    officeSupplies = "officeSupplies", // Purchase of office supplies such as paper, pens, etc.
    vehicleMaintenance = "vehicleMaintenance", // Maintenance and repair of company vehicles
    fuel = "fuel", // Purchase of fuel for vehicles
    insurance = "insurance", // Payment for insurance coverage
    equipmentPurchase = "equipmentPurchase", // Purchase of equipment like computers, printers, etc.
    marketing = "marketing", // Expenses related to marketing and advertising
    softwareSubscriptions = "softwareSubscriptions", // Payment for software subscriptions
    legalFees = "legalFees", // Payment for legal services
    training = "training", // Expenses related to employee training
    taxes = "taxes", // Payment of taxes
    loanRepayments = "loanRepayments", // Repayment of loans
    interest = "interest", // Payment of interest on loans or credit
    officeRent = "officeRent", // Rent for office space
    warehouseRent = "warehouseRent", // Rent for warehouse space
    travelExpenses = "travelExpenses", // Expenses related to business travel
    professionalServices = "professionalServices", // Payment for professional services like accounting, consulting, etc.
    maintenance = "maintenance", // General maintenance expenses
    securityServices = "securityServices", // Payment for security services
    packagingMaterials = "packagingMaterials", // Purchase of packaging materials
    cleaningServices = "cleaningServices", // Payment for cleaning services
    wasteDisposal = "wasteDisposal", // Payment for waste disposal services
    officeEquipment = "officeEquipment", // Purchase of office equipment
    internetServices = "internetServices", // Payment for internet services
    telecommunication = "telecommunication", // Payment for phone and internet services
    officeFurniture = "officeFurniture", // Purchase of office furniture
    membershipFees = "membershipFees", // Payment for membership fees (e.g., industry associations)
    professionalDevelopment = "professionalDevelopment", // Expenses related to professional development
    vehicleLease = "vehicleLease", // Lease payments for company vehicles
    advertising = "advertising", // Expenses related to advertising
    deliveryExpenses = "deliveryExpenses", // Expenses directly related to the delivery process
    miscellaneous = "miscellaneous", // Other miscellaneous expenses
}

registerEnumType(ExpenseType, {
    name: 'ExpenseType',
  });

export enum RequestPriority{
    low = "low",
    medium = "medium",
    high = "high"
}

registerEnumType(RequestPriority, {
    name: 'RequestPriority',
  });

export enum RequestType {

    notification = "notification",
    confirmation = "confirmation",
    authorization = "authorization",
    subscription = "subscription",
    verification = "verification",
    reminder = "reminder",
    invitation = "invitation",
    passwordReset = "passwordReset",
    accountUpdate = "accountUpdate",
    transactionUpdate = "transactionUpdate",
    policyUpdate = "policyUpdate",
    announcement = "announcement",
    feedback = "feedback",
    support = "support",
    marketing = "marketing",
    survey = "survey",
    report = "report",
    inquiry = "inquiry",
    appointment = "appointment",
    request = "request",
    orderProblem = "orderProblem", // Notify merchants about problems in orders
    paymentReminder = "paymentReminder", // Notify about overdue payments
    invoice = "invoice", // Request to the merchant in shape of invoice for an amount due
    other = "other"
}


registerEnumType(RequestType, {
    name: 'RequestType',
  });

export enum OrderType {
    delivery = "delivery",
    exchange = "exchange",
    refund = "refund",
    freeDelivery = "freeDelivery",
    gift = "gift",
    freeOfCharge = "freeOfCharge"
}

registerEnumType(OrderType, {
    name: 'OrderType',
  });

export enum PaymentType {
    cash = "cash",
    card = "card",
    free = "free",
}

registerEnumType(PaymentType, {
    name: 'PaymentType',
  });

  export enum RequestStatus{

    sent = "sent",
    pending = "pending",
    read = "read",
    rejected = "rejected",
    accepted = "accepted",
    expired = "expired"

}

registerEnumType(RequestStatus, {
    name: 'RequestStatus',
  });

export enum UserType {
    admin = 'admin',
    finance = 'finance',
    inventory = 'inventory',
    merchant = 'merchant',
    courier = 'courier',
    customer = 'customer',
    customerService = 'customerService',
}
registerEnumType(UserType, {
    name: 'UserType',
  });

export enum FinancialAccountType {
   hub = "hub",
   user = "user",
   merchant = "merchant",
   bank = "bank",
   department = "department"
};

registerEnumType(FinancialAccountType, {
    name: 'FinancialAccountType',
  });


export enum ItemHistoryEnum{

    import = "import",
    newImport = "newImport",
    orderReturn = "orderReturn",
    export = "export",
    orderExport = "orderExport"
}
registerEnumType(ItemHistoryEnum, {
    name: 'ItemHistoryEnum',
  });

export enum InventoryRentType{

    item = "item",
    box = "box",
    ballot = "ballot",
    rack = "rack",
    inventory = "inventory",
    meter = "meter"
  
}
registerEnumType(InventoryRentType, {
    name: 'InventoryRentType',
  });