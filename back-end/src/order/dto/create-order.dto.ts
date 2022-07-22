import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsEmail, IsNumber, IsPhoneNumber, IsPositive, IsString, ValidateNested } from "class-validator";

export class OrderUnitDto {
    @IsNumber()
    @IsPositive()
    count:number;
    
    @IsString()
    productId: string;
}

export class CreateOrderDto{
    @IsString()
    shopId: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
	@Type(() => OrderUnitDto)
    orderUnits: OrderUnitDto[];

    @IsEmail()
    email: string;

    
    @IsString()
    name: string;

    @IsString()
    phone: string;

    
    @IsString()
    address: string;
} 