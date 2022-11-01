import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Customer = {
  address?: Array<Address>;
  createdAt: Date;
  email: string | null;
  firstName: string;
  id: string;
  lastName: string;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
