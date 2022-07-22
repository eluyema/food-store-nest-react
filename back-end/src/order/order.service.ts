import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DbName } from 'src/common/enums/db-name.enum';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderModel } from './order.model';

@Injectable()
export class OrderService {
    constructor(@InjectModel(DbName.ORDERS) private orderModel: Model<OrderModel>) {
    }

    async getAllOrders(){
        return this.orderModel.find().exec();
    }

    async createOrder(dto: CreateOrderDto){
        const orderWithRefs = {
            phone: dto.phone,
            name: dto.name,
            email: dto.email,
            address: dto.address,
            shopId: new Types.ObjectId(dto.shopId),
            orderUnits: dto.orderUnits.map(
                unit=>({...unit,
                    productId: new Types.ObjectId(unit.productId)})
                    )
                }

        return this.orderModel.create(orderWithRefs);
    }
}
