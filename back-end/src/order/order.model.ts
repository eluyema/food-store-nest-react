import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ProductModel, ShopModel } from 'src/shop/shop.model';

export class OrderUnitModel {
    @prop()
    count: number;

    @prop({ ref: () => ProductModel })
    productId: Ref<ProductModel>;
}

export interface OrderModel extends Base {}
export class OrderModel extends TimeStamps {
    @prop({ ref: () => ShopModel }) 
    shopId: Ref<ShopModel>;

    @prop({ required: true, type: () => [OrderUnitModel], default: [] })
    orderUnits: OrderUnitModel[];

    @prop()
    email: string;
    
    @prop()
    name: string;
    
    @prop()
    phone: string;
    
    @prop()
    address: string;
}