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
import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AddressCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  address?: AddressCreateNestedManyWithoutCustomersInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutCustomersInput;

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
export { CustomerCreateInput };
