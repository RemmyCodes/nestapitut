import { AddressUpdateManyWithoutCustomersInput } from "./AddressUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string;
  lastName?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
