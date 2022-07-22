import { IsNumber, IsPositive, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateProductTdo {
    @IsString()
    @MinLength(3)
    @MaxLength(40)
    name: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsUrl()
    image: string
}