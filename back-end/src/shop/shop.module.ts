import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { buildSchema, getModelForClass } from '@typegoose/typegoose';
import { DbName } from 'src/common/enums/db-name.enum';
import { ShopController } from './shop.controller';
import { ShopModel } from './shop.model';
import { ShopService } from './shop.service';

@Module({
  imports:[MongooseModule.forFeature([{ name:DbName.SHOPS, schema: buildSchema(ShopModel) }])],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}
