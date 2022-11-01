import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName: string;
  lastName: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
