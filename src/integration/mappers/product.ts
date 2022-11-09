import { OrdersItem } from '@voucherify/sdk';
import { LineItem } from '@commercetools/platform-sdk';
import { Item } from '../types';

export class ProductMapper {}

export function getMetadata(attributes, metadataSchemaProperties) {
  return attributes
    ? Object.fromEntries(
        attributes
          .filter((attr) => metadataSchemaProperties.includes(attr.name))
          .map((attr) => [attr.name, attr.value]),
      )
    : {};
}

export function mapItems(
  lineItems: Item[],
  metadataSchemaProperties = [],
): OrdersItem[] {
  console.log(lineItems);
  return lineItems
    .filter((item) => item.quantity > 0)
    .map((item) => {
      return {
        source_id: item?.source_id,
        related_object: 'sku' as 'sku' | 'product',
        quantity: getQuantity(item),
        price: item.price,
        amount: item.amount,
        product: {
          override: true,
          name: item.name,
        },
        sku: {
          override: true,
          sku: item.sku,
          metadata: metadataSchemaProperties
            ? getMetadata(item?.attributes, metadataSchemaProperties)
            : {},
        },
      };
    });
}

export function getQuantity(item) {
  const custom = item.custom?.fields?.applied_codes;
  let itemQuantity = item?.quantity;

  if (custom) {
    custom
      .map((code) => JSON.parse(code))
      .filter(
        (code) => code.type === 'UNIT' && code.effect !== 'ADD_MISSING_ITEMS',
      )
      .forEach(
        (code) => (itemQuantity = itemQuantity - code.totalDiscountQuantity),
      );
  }
  return itemQuantity;
}
