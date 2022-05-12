import { Injectable } from '@nestjs/common';
import { VoucherifyServerSide } from '@voucherify/sdk';
import { ConfigService } from '@nestjs/config';
import { Cart } from '@commercetools/platform-sdk';

@Injectable()
export class VoucherifyConnectorService {
  constructor(private configService: ConfigService) {
    (async () => {
      await this.getClient();
    })();
  }

  private readonly applicationId: string =
    this.configService.get<string>('VOUCHERIFY_APP_ID');
  private readonly secretKey: string = this.configService.get<string>(
    'VOUCHERIFY_SECRET_KEY',
  );

  getClient(): ReturnType<typeof VoucherifyServerSide> {
    return VoucherifyServerSide({
      applicationId: this.applicationId,
      secretKey: this.secretKey,
    });
  }

  async validateVoucherWithCTCart(coupon: string, cart: Cart) {
    const getAmount = (item) => {
      try {
        return item?.variant?.prices?.[0]?.value?.centAmount * item.quantity;
      } catch (e) {
        return undefined;
      }
    };

    return await this.getClient().validations.validateVoucher(coupon, {
      customer: {
        id: cart?.createdBy?.clientId,
      },
      order: {
        id: cart.id,
        amount: cart.lineItems
          .map((item) => item?.totalPrice?.centAmount)
          .filter((price) => price)
          .reduce((a, b) => a + b, 0),
        items: cart.lineItems.map((item) => {
          return {
            sku_id: item?.variant?.sku,
            product_id: item?.id,
            related_object: 'sku',
            quantity: item?.quantity,
            price: item?.variant.prices?.[0]?.value?.centAmount,
            amount: getAmount(item),
            product: {
              override: true,
              name: Object?.values(item.name)?.[0],
            },
            sku: {
              override: true,
              sku: item?.variant?.sku,
            },
          };
        }),
      },
    });
  }
}
