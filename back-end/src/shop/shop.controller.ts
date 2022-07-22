import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { CreateProductTdo } from './dto/create-product.tdo';
import { CreateShopDto } from './dto/create-shop.dto';
import { PRODUCT_NOT_FOUND_ERROR, SHOP_NOT_FOUND_ERROR } from './shop.constants';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
    constructor(
		private readonly shopService: ShopService,
	) { }
    @Get('/names')
    async getShopNames(){
        return this.shopService.getAllShopsNames();
    }

    @Get('/')
    async getShops(){
        return this.shopService.getAllShops();
    }

    @Get(':id/product')
    async getShopProducts(@Param('id',IdValidationPipe) id: string){
        const shop = await this.shopService.getShopProducts(id);
        if (!shop) {
			throw new NotFoundException(SHOP_NOT_FOUND_ERROR);
		}
        return shop.products;
    }

    @Post('/')
    async createNewShop(@Body() dto: CreateShopDto){
        return this.shopService.createShop(dto);
    }

    @Post(':id/product')
    async createNewProduct(@Param('id',IdValidationPipe) id: string, @Body() dto: CreateProductTdo){
        const shop = await this.shopService.createProduct(id,dto);
        if (!shop) {
			throw new NotFoundException(SHOP_NOT_FOUND_ERROR);
		}
        return shop.products;
    }

    @Delete(':id')
	async deleteShop(@Param('id',IdValidationPipe) id: string) {
		const deletedShop = await this.shopService.deleteShop(id);
		if (!deletedShop) {
			throw new NotFoundException(SHOP_NOT_FOUND_ERROR);
		}
	}

    @Delete(':shopId/product/:productId')
	async deleteProduct(@Param('shopId',IdValidationPipe) shopId: string,
        @Param('productId',IdValidationPipe) productId: string) {
		const deletedProduct = await this.shopService.deleteProduct(shopId,productId);
		if (!deletedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
	}

    @Patch(':id')
	async updateShop(@Param('id',IdValidationPipe) id: string, @Body() dto: CreateShopDto) {
		const updatedShop = await this.shopService.updateShop(id, dto);
		if (!updatedShop) {
			throw new NotFoundException(SHOP_NOT_FOUND_ERROR);
		}
	}

}
