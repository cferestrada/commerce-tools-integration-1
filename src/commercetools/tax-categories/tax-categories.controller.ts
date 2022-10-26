import { Controller, Post } from '@nestjs/common';
import { TaxCategoriesService } from './tax-categories.service';
import { TaxCategory } from '@commercetools/platform-sdk';

@Controller('tax-categories')
export class TaxCategoriesController {
  constructor(private readonly taxCategoriesService: TaxCategoriesService) {}

  @Post('configure')
  async configure(): Promise<{
    success: boolean;
    couponTaxCategory?: TaxCategory;
  }> {
    return await this.taxCategoriesService.configureCouponTaxCategory({});
  }
}
