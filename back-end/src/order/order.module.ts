import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DbName } from 'src/common/enums/db-name.enum';
import { buildSchema } from '@typegoose/typegoose';
import { OrderModel } from './order.model';

@Module({
  imports:[MongooseModule.forFeature([{ name:DbName.ORDERS, schema: buildSchema(OrderModel)}])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
