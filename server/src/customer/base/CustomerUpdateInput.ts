/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressUpdateManyWithoutCustomersInput } from "./AddressUpdateManyWithoutCustomersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AddressUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AddressUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  address?: AddressUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;
}
export { CustomerUpdateInput };
