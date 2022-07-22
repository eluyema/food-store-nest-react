import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(
		private readonly orderService: OrderService,
	) { }

    @Get()
    async getAllOrders(){
        return this.orderService.getAllOrders();
    }

    @Post()
    async createOrder(@Body() dto: CreateOrderDto){
        return this.orderService.createOrder(dto);
    }
}
