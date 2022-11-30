import {
  defaultGetCouponTaxCategoryResponse,
  getTaxCategoryServiceMockWithConfiguredTaxCategoryResponse,
} from '../../../../commerceTools/tax-categories/__mocks__/tax-categories.service';
import { getVoucherifyConnectorServiceMockWithDefinedResponse } from '../../../../voucherify/__mocks__/voucherify-connector.service';
import { getCommerceToolsConnectorServiceMockWithProductResponse } from '../../../../commerceTools/__mocks__/commerce-tools-connector.service';
import { buildCartServiceWithMockedDependencies } from '../../cart-service.factory';
import { VoucherifyConnectorService } from 'src/voucherify/voucherify-connector.service';
import { voucherifyResponse } from './snapshots/voucherifyResponse.snapshot';
import { cart } from './snapshots/cart.snapshot';
import { CommercetoolsService } from '../../../../commercetools/commercetools.service';
import { getTypesServiceMockWithConfiguredCouponTypeResponse } from '../../../../commercetools/custom-types/__mocks__/types.service';
describe('when adding new product to the cart with free product already applied (via coupon)', () => {
  let commercetoolsService: CommercetoolsService;
  let voucherifyConnectorService: VoucherifyConnectorService;
  const SKU_ID = 'gift-sku-id';
  const PRODUCT_ID = 'gift-product-id';
  const PRODUCT_PRICE = 6500;

  beforeEach(async () => {
    const typesService = getTypesServiceMockWithConfiguredCouponTypeResponse();
    const taxCategoriesService =
      getTaxCategoryServiceMockWithConfiguredTaxCategoryResponse();
    voucherifyConnectorService =
      getVoucherifyConnectorServiceMockWithDefinedResponse(voucherifyResponse);
    const commerceToolsConnectorService =
      getCommerceToolsConnectorServiceMockWithProductResponse({
        sku: SKU_ID,
        price: PRODUCT_PRICE,
        id: PRODUCT_ID,
      });

    ({ commercetoolsService } = await buildCartServiceWithMockedDependencies({
      typesService,
      taxCategoriesService,
      voucherifyConnectorService,
      commerceToolsConnectorService,
    }));
  });

  it('after adding unit type coupon with unit value 1 it should create `removeCustomLineItem` and `addCustomLineItem` actions', async () => {
    const result = await commercetoolsService.handleCartUpdate(cart);

    expect(result.actions).toEqual([
      {
        action: 'removeCustomLineItem',
        customLineItemId: 'c1ff70fb-895d-49d9-bb0c-d27a55172e78',
      },
      {
        action: 'addCustomLineItem',
        name: { en: 'Coupon codes discount', de: 'Gutscheincodes rabatt' },
        quantity: 1,
        money: {
          centAmount: -30396,
          type: 'centPrecision',
          currencyCode: 'EUR',
        },
        slug: 'Voucher, ',
        taxCategory: { id: '64a3b50d-245c-465a-bb5e-faf59d729031' },
      },
      {
        action: 'setLineItemCustomType',
        lineItemId: '15e558a9-ad7e-4baf-a332-b9f1b41c3c98',
        type: { key: 'lineItemCodesType' },
        fields: {},
      },
      {
        action: 'setCustomField',
        name: 'session',
        value: 'ssn_zAzRMfVseqcy7mck5P4GiOMHFGhwlJ7T',
      },
      {
        action: 'setCustomField',
        name: 'discount_codes',
        value: [
          '{"code":"X_3%_OFF","status":"APPLIED","type":"voucher","value":1511}',
          '{"code":"X_10%_OFF","status":"APPLIED","type":"voucher","value":5035}',
          '{"code":"UNIT_TYPE_OFF","status":"APPLIED","type":"voucher","value":23850}',
        ],
      },
      {
        action: 'setCustomField',
        name: 'shippingProductSourceIds',
        value: ['260d2585-daef-4c11-9adb-1b90099b7ae8'],
      },
      { action: 'setCustomField', name: 'couponsLimit', value: 5 },
    ]);
  });
});
