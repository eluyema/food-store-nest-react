import { IsString, MaxLength, MinLength } from "class-validator"
import { ProductModel } from "../shop.model"

export class CreateShopDto {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string
    products?: Pick<ProductModel,'name'|'price'|'image'>[]
}