import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { VoucherifyConnectorService } from './voucherify/voucherify-connector.service';
import { CommerceToolsConnectorService } from './commerceTools/commerce-tools-connector.service';
import { ApiExtensionController } from './api-extension/api-extension.controller';
import { CartService } from './api-extension/cart.service';
import { RegisterService } from './api-extension/register.service';
import { ConfigModule } from '@nestjs/config';
import { TaxCategoriesService } from './commerceTools/tax-categories/tax-categories.service';
import { TaxCategoriesController } from './commerceTools/tax-categories/tax-categories.controller';
import { TypesController } from './commerceTools/types/types.controller';
import { TypesService } from './commerceTools/types/types.service';
import { ProductsService } from './commerceTools/products/products.service';
import { OrderService } from './api-extension/order.service';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ProductImportService } from './import/product-import.service';
import { ImportController } from './import/import.controller';
import { OrderImportService } from './import/order-import.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        APP_URL: Joi.string(),
        VOUCHERIFY_APP_ID: Joi.string().required(),
        VOUCHERIFY_SECRET_KEY: Joi.string().required(),
        VOUCHERIFY_API_URL: Joi.string().required(),
        COMMERCE_TOOLS_PROJECT_KEY: Joi.string().required(),
        COMMERCE_TOOLS_AUTH_URL: Joi.string().required(),
        COMMERCE_TOOLS_API_URL: Joi.string().required(),
        COMMERCE_TOOLS_ID: Joi.string().required(),
        COMMERCE_TOOLS_SECRET: Joi.string().required(),
        COMMERCE_TOOLS_PRODUCTS_CURRENCY: Joi.string().optional(),
        COMMERCE_TOOLS_PRODUCTS_COUNTRY: Joi.string().optional(),
        COMMERCE_TOOLS_PRODUCT_CHANNEL: Joi.string().optional(),
        COMMERCE_TOOLS_PRODUCT_CUSTOMER_GROUP: Joi.string().optional(),
      }),
    }),
  ],
  controllers: [
    AppController,
    ApiExtensionController,
    TaxCategoriesController,
    TypesController,
    ImportController,
  ],
  providers: [
    AppService,
    CartService,
    RegisterService,
    VoucherifyConnectorService,
    CommerceToolsConnectorService,
    TaxCategoriesService,
    TypesService,
    ProductsService,
    OrderService,
    ProductImportService,
    OrderImportService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        enableDebugMessages: true,
      }),
    },
  ],
})
export class AppModule {}
