type userType = "admin" | "manager" | "customer";

interface OrderDetails {
  price: number;
  shipmentStatus: string;
  customerName: string;
  costPerUnit?: number;
  supplierDetails?: string;
  profit?: number;
}

type FilterVisibleOrderDetailsByUserType<Role extends userType> = Role extends "admin"
  ? OrderDetails
  : Role extends "manager"
  ? Omit<OrderDetails, "profit">
  : Pick<OrderDetails, "price" | "shipmentStatus" | "customerName">;

function getOrderDetails<Tuser extends userType>(
  userRole: Tuser
): FilterVisibleOrderDetailsByUserType<Tuser> {
  // fetch order details by permissions
  // I'll use a hard coded object for simplicity
  const userOrder = {
    price: 19.99,
    shipmentStatus: "in transit",
    customerName: "Don Draper",
    costPerUnit: 3.0,
    supplierDetails: "Acme Corp",
    profit: 16.99
  } satisfies OrderDetails;

  if (userRole === "admin") {
    return userOrder as FilterVisibleOrderDetailsByUserType<Tuser>;
  }

  if (userRole === "manager") {
    const { profit, ...restOfUserObject } = userOrder;
    return restOfUserObject as FilterVisibleOrderDetailsByUserType<Tuser>;
  }

  const { profit, supplierDetails, costPerUnit, ...customerOrder } = userOrder;
  return customerOrder as FilterVisibleOrderDetailsByUserType<Tuser>;
}

const managerOrderDetails = getOrderDetails("manager"); // returns Omit<OrderDetails, "profit">
