import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
    @prop()
    name: string;

    @prop()
    price: number;

    @prop()
    image: string;
}

export interface ShopModel extends Base {}
export class ShopModel extends TimeStamps {
    @prop({unique: true})
    name: string;

    @prop({ required: true, type: () => [ProductModel], default: [] })
    products: ProductModel[];
}
