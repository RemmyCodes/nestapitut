import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: AddressListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
};
