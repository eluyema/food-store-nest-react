import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DbName } from 'src/common/enums/db-name.enum';
import { CreateProductTdo } from './dto/create-product.tdo';
import { CreateShopDto } from './dto/create-shop.dto';
import { ProductModel, ShopModel } from './shop.model';

@Injectable()
export class ShopService {
    constructor(@InjectModel(DbName.SHOPS) private shopModel: Model<ShopModel>) {}
    async getAllShops() {
        return this.shopModel.find().exec();
    }

    async getAllShopsNames(){
        return this.shopModel.find({}).select('name').exec();
    }

    async createShop(dto: CreateShopDto) {
        return this.shopModel.create(dto);
    }

    async deleteShop(id: string) {
        return this.shopModel.findByIdAndDelete(id).exec();
    }
    
    async updateShop(id: string, dto: CreateShopDto){
        return this.shopModel.findByIdAndUpdate(id, dto).exec();
    }

    async createProduct(id:string, dto: CreateProductTdo) {
        const product = dto as ProductModel;
        
        return this.shopModel.findByIdAndUpdate(id,{ $push: { products: product } },{new: true},).exec()
    }

    async deleteProduct(shopId:string,productId: string) {
        return this.shopModel.findByIdAndUpdate(shopId,{ $pull: { products: {_id: new Types.ObjectId(productId)} } },{new: true}).exec()
    }

    async getShopProducts(id: string) {
        return this.shopModel.findById(id).exec();
    }
}
