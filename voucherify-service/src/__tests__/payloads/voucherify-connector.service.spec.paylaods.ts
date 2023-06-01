export const validateStackableVouchersRequest = {
  redeemables: [{ object: 'voucher', id: 'TEST_VOUCHER_1' }],
  session: { type: 'LOCK' },
  order: {
    source_id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
    customer: { source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4' },
    amount: 19000,
    discount_amount: 0,
    items: [
      {
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        price: 9500,
        amount: 9500,
        product: {
          override: true,
          name: 'Long sleeve T-Shirt Michael Kors black',
        },
        sku: {
          override: true,
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
        },
      },
      {
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        price: 9500,
        amount: 9500,
        product: {
          override: true,
          name: 'Long sleeve T-Shirt Michael Kors black',
        },
        sku: {
          override: true,
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
        },
      },
    ],
  },
  customer: { source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4' },
};

export const validateStackableResponse = {
  valid: true,
  redeemables: [
    {
      status: 'APPLICABLE',
      id: 'TEST_VOUCHER_1',
      object: 'voucher',
      order: {
        source_id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
        amount: 19000,
        discount_amount: 190,
        total_discount_amount: 190,
        total_amount: 18810,
        applied_discount_amount: 190,
        total_applied_discount_amount: 190,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
            subtotal_amount: 9500,
            product: {
              name: 'Long sleeve T-Shirt Michael Kors black',
              override: true,
            },
            sku: {
              sku: 'Long sleeve T-Shirt Michael Kors black',
              metadata: {},
              override: true,
            },
          },
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
            subtotal_amount: 9500,
            product: {
              name: 'Long sleeve T-Shirt Michael Kors black',
              override: true,
            },
            sku: {
              sku: 'Long sleeve T-Shirt Michael Kors black',
              metadata: {},
              override: true,
            },
          },
        ],
        metadata: {},
        customer_id: null,
        referrer_id: null,
        object: 'order',
      },
      applicable_to: {
        data: [],
        total: 0,
        data_ref: 'data',
        object: 'list',
      },
      inapplicable_to: {
        data: [],
        total: 0,
        data_ref: 'data',
        object: 'list',
      },
      result: {
        discount: {
          type: 'PERCENT',
          effect: 'APPLY_TO_ORDER',
          percent_off: 1,
          is_dynamic: false,
        },
      },
    },
  ],
  order: {
    source_id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
    amount: 19000,
    discount_amount: 190,
    total_discount_amount: 190,
    total_amount: 18810,
    applied_discount_amount: 190,
    total_applied_discount_amount: 190,
    items: [
      {
        object: 'order_item',
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        amount: 9500,
        price: 9500,
        subtotal_amount: 9500,
        product: {
          name: 'Long sleeve T-Shirt Michael Kors black',
          override: true,
        },
        sku: {
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
          override: true,
        },
      },
      {
        object: 'order_item',
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        amount: 9500,
        price: 9500,
        subtotal_amount: 9500,
        product: {
          name: 'Long sleeve T-Shirt Michael Kors black',
          override: true,
        },
        sku: {
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
          override: true,
        },
      },
    ],
    metadata: {},
    customer_id: null,
    referrer_id: null,
    object: 'order',
  },
  tracking_id: 'track_6X46Hjvb5Rj2MggH3LHIGeRSVuK9akl2p3I8NBfSHBdThHEgOtkYgw==',
  session: {
    key: 'ssn_DFGC91oKjXKz47lap6S6Wo0C4rpG37qc',
    type: 'LOCK',
    ttl: 7,
    ttl_unit: 'DAYS',
  },
};

export const getAvailablePromotionsCart = {
  id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
  anonymousId: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
  sessionKey: 'ssn_DFGC91oKjXKz47lap6S6Wo0C4rpG37qc',
  coupons: [
    { code: 'TEST_VOUCHER_1', status: 'APPLIED', type: 'voucher', value: 190 },
  ],
  items: [
    {
      source_id: 'M0E20000000EL2R',
      quantity: 1,
      price: 9500,
      amount: 9500,
      name: 'Long sleeve T-Shirt Michael Kors black',
      sku: 'Long sleeve T-Shirt Michael Kors black',
      attributes: [
        { name: 'articleNumberManufacturer', value: 'MS55KGW1UK 001' },
        { name: 'articleNumberMax', value: '82351' },
        { name: 'matrixId', value: 'M0E20000000EL2R' },
        { name: 'baseId', value: '82351' },
        {
          name: 'designer',
          value: { key: 'michaelkors', label: 'Michael Kors' },
        },
        { name: 'madeInItaly', value: { key: 'no', label: 'no' } },
        { name: 'commonSize', value: { key: 'xxs', label: 'XXS' } },
        { name: 'size', value: 'XXS' },
        {
          name: 'color',
          value: {
            key: 'black',
            label: { en: 'black', it: 'nero', de: 'schwarz' },
          },
        },
        { name: 'colorFreeDefinition', value: { en: 'black', de: 'schwarz' } },
        { name: 'style', value: { key: 'sporty', label: 'sporty' } },
        { name: 'gender', value: { key: 'women', label: 'Damen' } },
        { name: 'season', value: 's15' },
      ],
    },
    {
      source_id: 'M0E20000000EL2R',
      quantity: 1,
      price: 9500,
      amount: 9500,
      name: 'Long sleeve T-Shirt Michael Kors black',
      sku: 'Long sleeve T-Shirt Michael Kors black',
      attributes: [
        { name: 'articleNumberManufacturer', value: 'MS55KGW1UK 001' },
        { name: 'articleNumberMax', value: '82351' },
        { name: 'matrixId', value: 'M0E20000000EL2R' },
        { name: 'baseId', value: '82351' },
        {
          name: 'designer',
          value: { key: 'michaelkors', label: 'Michael Kors' },
        },
        { name: 'madeInItaly', value: { key: 'no', label: 'no' } },
        { name: 'commonSize', value: { key: 'xxs', label: 'XXS' } },
        { name: 'size', value: 'XXS' },
        {
          name: 'color',
          value: {
            key: 'black',
            label: { en: 'black', it: 'nero', de: 'schwarz' },
          },
        },
        { name: 'colorFreeDefinition', value: { en: 'black', de: 'schwarz' } },
        { name: 'style', value: { key: 'sporty', label: 'sporty' } },
        { name: 'gender', value: { key: 'women', label: 'Damen' } },
        { name: 'season', value: 's15' },
      ],
    },
  ],
};

export const getAvailablePromotionsValidateWith = {
  customer: {
    id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
    source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
  },
  order: {
    source_id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
    items: [
      {
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        price: 9500,
        amount: 9500,
        product: {
          override: true,
          name: 'Long sleeve T-Shirt Michael Kors black',
        },
        sku: {
          override: true,
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
        },
      },
      {
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        price: 9500,
        amount: 9500,
        product: {
          override: true,
          name: 'Long sleeve T-Shirt Michael Kors black',
        },
        sku: {
          override: true,
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
        },
      },
    ],
    amount: 19000,
  },
};

export const getAvailablePromotionsResponseObject = {
  valid: true,
  tracking_id: 'track_6X46Hjvb5Rj2MggH3LHIGeRSVuK9akl2p3I8NBfSHBdThHEgOtkYgw==',
  promotions: [
    {
      valid: true,
      applicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      tracking_id:
        'track_6X46Hjvb5Rj2MggH3LHIGeRSVuK9akl2p3I8NBfSHBdThHEgOtkYgw==',
      order: {
        source_id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
        amount: 19000,
        discount_amount: 1900,
        total_discount_amount: 1900,
        total_amount: 17100,
        applied_discount_amount: 1900,
        total_applied_discount_amount: 1900,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
            subtotal_amount: 9500,
            product: {
              name: 'Long sleeve T-Shirt Michael Kors black',
              override: true,
            },
            sku: {
              sku: 'Long sleeve T-Shirt Michael Kors black',
              metadata: {},
              override: true,
            },
          },
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
            subtotal_amount: 9500,
            product: {
              name: 'Long sleeve T-Shirt Michael Kors black',
              override: true,
            },
            sku: {
              sku: 'Long sleeve T-Shirt Michael Kors black',
              metadata: {},
              override: true,
            },
          },
        ],
        metadata: {},
        customer_id: null,
        referrer_id: null,
        object: 'order',
      },
      id: 'promo_sBe05RSTPSfUiojdpwueAkTJ',
      name: '10%off',
      banner: '10% off',
      discount: {
        type: 'PERCENT',
        effect: 'APPLY_TO_ORDER',
        percent_off: 10,
        is_dynamic: false,
      },
      campaign: {
        id: 'camp_jgmwojTpC7Qr0rURCoIP7FGy',
        start_date: null,
        expiration_date: null,
        active: true,
        object: 'campaign',
      },
      hierarchy: 1,
      discount_amount: 1900,
      applied_discount_amount: 1900,
      metadata: {},
      object: 'promotion_tier',
      category_id: null,
      categories: [],
    },
    {
      valid: true,
      applicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
      tracking_id:
        'track_6X46Hjvb5Rj2MggH3LHIGeRSVuK9akl2p3I8NBfSHBdThHEgOtkYgw==',
      order: {
        source_id: '9e9d98f0-0cf7-4487-95d8-56c1478d7a17',
        amount: 19000,
        discount_amount: 0,
        total_discount_amount: 0,
        total_amount: 19000,
        applied_discount_amount: 0,
        total_applied_discount_amount: 0,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
            subtotal_amount: 9500,
            product: {
              name: 'Long sleeve T-Shirt Michael Kors black',
              override: true,
            },
            sku: {
              sku: 'Long sleeve T-Shirt Michael Kors black',
              metadata: {},
              override: true,
            },
          },
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
            subtotal_amount: 9500,
            product: {
              name: 'Long sleeve T-Shirt Michael Kors black',
              override: true,
            },
            sku: {
              sku: 'Long sleeve T-Shirt Michael Kors black',
              metadata: {},
              override: true,
            },
          },
        ],
        metadata: {},
        customer_id: null,
        referrer_id: null,
        object: 'order',
      },
      id: 'promo_1c4Q5taDrKynBgA4aTJGyp0p',
      name: 'One time for new customer',
      banner: 'Get 5% for your first order',
      discount: {
        type: 'PERCENT',
        effect: 'APPLY_TO_ORDER',
        percent_off: 0,
        is_dynamic: false,
      },
      campaign: {
        id: 'camp_6aTNiY7o6d2o6C3GSx3yjU33',
        start_date: null,
        expiration_date: null,
        active: true,
        object: 'campaign',
      },
      hierarchy: 1,
      discount_amount: 0,
      applied_discount_amount: 0,
      metadata: {},
      object: 'promotion_tier',
      category_id: null,
      categories: [],
    },
  ],
};

export const redeemStackableVouchersRequest = {
  session: { type: 'LOCK', key: 'ssn_DFGC91oKjXKz47lap6S6Wo0C4rpG37qc' },
  redeemables: [{ object: 'voucher', id: 'TEST_VOUCHER_1' }],
  order: {
    source_id: 'ba843e06-f37d-4372-8dac-c68815fb01a9',
    amount: 19000,
    status: 'PAID',
    items: [
      {
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        price: 9500,
        amount: 9500,
        product: {
          override: true,
          name: 'Long sleeve T-Shirt Michael Kors black',
        },
        sku: {
          override: true,
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
        },
      },
      {
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        price: 9500,
        amount: 9500,
        product: {
          override: true,
          name: 'Long sleeve T-Shirt Michael Kors black',
        },
        sku: {
          override: true,
          sku: 'Long sleeve T-Shirt Michael Kors black',
          metadata: {},
        },
      },
    ],
    metadata: {},
  },
  customer: {
    source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
    name: 'Piotr Zieliński',
    email: 'piotrzielinski96@yahoo.com',
    address: {
      city: 'Kraków',
      country: 'DE',
      postal_code: '31-543',
      line_1: 'Porcelanowa',
    },
    phone: '+48796120506',
  },
};

export const redeemStackableVouchersResponse = {
  redemptions: [
    {
      id: 'r_0cff8ae8c782685c22',
      customer_id: 'cust_4exKXpuLjfuAfjdaqOrZBluF',
      tracking_id:
        'track_6X46Hjvb5Rj2MggH3LHIGeRSVuK9akl2p3I8NBfSHBdThHEgOtkYgw==',
      date: '2023-06-01T13:53:24.766Z',
      order: {
        id: 'ord_FFqTHAnv7h7tSlyYo5pdltld',
        source_id: 'ba843e06-f37d-4372-8dac-c68815fb01a9',
        status: 'PAID',
        customer_id: 'cust_4exKXpuLjfuAfjdaqOrZBluF',
        referrer_id: null,
        amount: 19000,
        discount_amount: 190,
        applied_discount_amount: 190,
        total_discount_amount: 190,
        total_applied_discount_amount: 190,
        total_amount: 18810,
        items: [
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
          },
          {
            object: 'order_item',
            source_id: 'M0E20000000EL2R',
            related_object: 'sku',
            quantity: 1,
            amount: 9500,
            price: 9500,
          },
        ],
        metadata: {},
        object: 'order',
      },
      customer: {
        id: 'cust_4exKXpuLjfuAfjdaqOrZBluF',
        name: 'Piotr Zieliński',
        email: 'piotrzielinski96@yahoo.com',
        source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
        object: 'customer',
      },
      result: 'SUCCESS',
      voucher: {
        id: 'v_vhcSApY3xZHEVxebI3Gi2BMdnqvekcEP',
        code: 'TEST_VOUCHER_1',
        discount: { type: 'PERCENT', percent_off: 1 },
        type: 'DISCOUNT_VOUCHER',
        campaign: null,
        campaign_id: null,
        is_referral_code: false,
        created_at: '2023-05-04T16:45:31.982Z',
        object: 'voucher',
      },
      object: 'redemption',
    },
  ],
  order: {
    id: 'ord_FFqTHAnv7h7tSlyYo5pdltld',
    source_id: 'ba843e06-f37d-4372-8dac-c68815fb01a9',
    created_at: '2023-06-01T13:53:24.723Z',
    updated_at: null,
    status: 'PAID',
    amount: 19000,
    discount_amount: 190,
    total_discount_amount: 190,
    total_amount: 18810,
    applied_discount_amount: 190,
    total_applied_discount_amount: 190,
    items: [
      {
        object: 'order_item',
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        amount: 9500,
        price: 9500,
        subtotal_amount: 9500,
        product: { name: 'Long sleeve T-Shirt Michael Kors black' },
        sku: { sku: 'Long sleeve T-Shirt Michael Kors black', metadata: {} },
      },
      {
        object: 'order_item',
        source_id: 'M0E20000000EL2R',
        related_object: 'sku',
        quantity: 1,
        amount: 9500,
        price: 9500,
        subtotal_amount: 9500,
        product: { name: 'Long sleeve T-Shirt Michael Kors black' },
        sku: { sku: 'Long sleeve T-Shirt Michael Kors black', metadata: {} },
      },
    ],
    metadata: {},
    customer: { id: 'cust_4exKXpuLjfuAfjdaqOrZBluF', object: 'customer' },
    customer_id: 'cust_4exKXpuLjfuAfjdaqOrZBluF',
    referrer_id: null,
    object: 'order',
    redemptions: {
      r_0cff8ae8c782685c22: {
        date: '2023-06-01T13:53:24.766Z',
        related_object_type: 'voucher',
        related_object_id: 'v_vhcSApY3xZHEVxebI3Gi2BMdnqvekcEP',
      },
    },
  },
};

export const createOrderOrderObject = {
  id: 'c7d08c16-8a75-42dd-93eb-802861128a1d',
  customer: {
    source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
    name: 'Piotr Zieliński',
    email: 'piotrzielinski96@yahoo.com',
    address: {
      city: 'Kraków',
      country: 'DE',
      postal_code: '31-543',
      line_1: 'Porcelanowa',
    },
    phone: '+48796120506',
  },
  customerId: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
  status: 'PAID',
  coupons: [],
  items: [
    {
      source_id: 'M0E20000000ELIV',
      quantity: 1,
      price: 12500,
      amount: 12500,
      name: 'Slip-On Shoes “Olivia” Michael Kors black',
      sku: 'Slip-On Shoes “Olivia” Michael Kors black',
      attributes: [
        { name: 'articleNumberManufacturer', value: '43S5OLFP1L 001' },
        { name: 'articleNumberMax', value: '82398' },
        { name: 'matrixId', value: 'M0E20000000ELIV' },
        { name: 'baseId', value: '82398' },
        {
          name: 'designer',
          value: { key: 'michaelkors', label: 'Michael Kors' },
        },
        { name: 'madeInItaly', value: { key: 'no', label: 'no' } },
        { name: 'commonSize', value: { key: '35', label: '35' } },
        { name: 'size', value: '5' },
        {
          name: 'color',
          value: {
            key: 'black',
            label: { en: 'black', it: 'nero', de: 'schwarz' },
          },
        },
        { name: 'colorFreeDefinition', value: { en: 'black', de: 'schwarz' } },
        { name: 'style', value: { key: 'sporty', label: 'sporty' } },
        { name: 'gender', value: { key: 'women', label: 'Damen' } },
        { name: 'season', value: 's15' },
      ],
    },
  ],
  rawOrder: {
    type: 'Order',
    id: 'c7d08c16-8a75-42dd-93eb-802861128a1d',
    version: 2,
    versionModifiedAt: '2023-06-01T14:11:18.654Z',
    lastMessageSequenceNumber: 2,
    createdAt: '2023-06-01T14:11:18.501Z',
    lastModifiedAt: '2023-06-01T14:11:18.501Z',
    lastModifiedBy: {
      isPlatformClient: true,
      user: { typeId: 'user', id: 'eb521f4b-5a8b-4958-ba9c-93dd29d7c363' },
    },
    createdBy: {
      clientId: '3cx8PEBHMZQ1oHAYF1eoDs8i',
      isPlatformClient: false,
      anonymousId: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
    },
    anonymousId: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
    totalPrice: {
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: 12800,
      fractionDigits: 2,
    },
    taxedPrice: {
      totalNet: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 10756,
        fractionDigits: 2,
      },
      totalGross: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 12800,
        fractionDigits: 2,
      },
      taxPortions: [
        {
          rate: 0.19,
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 2044,
            fractionDigits: 2,
          },
          name: '19% incl.',
        },
      ],
      totalTax: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2044,
        fractionDigits: 2,
      },
    },
    country: 'DE',
    taxedShippingPrice: {
      totalNet: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 252,
        fractionDigits: 2,
      },
      totalGross: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 300,
        fractionDigits: 2,
      },
      taxPortions: [
        {
          rate: 0.19,
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 48,
            fractionDigits: 2,
          },
          name: '19% incl.',
        },
      ],
      totalTax: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 48,
        fractionDigits: 2,
      },
    },
    orderState: 'Open',
    paymentState: 'Paid',
    syncInfo: [],
    returnInfo: [],
    taxMode: 'Platform',
    inventoryMode: 'None',
    taxRoundingMode: 'HalfEven',
    taxCalculationMode: 'LineItemLevel',
    origin: 'Customer',
    shippingMode: 'Single',
    shippingInfo: {
      shippingMethodName: 'Standard EU',
      price: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 300,
        fractionDigits: 2,
      },
      shippingRate: {
        price: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 300,
          fractionDigits: 2,
        },
        freeAbove: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 20000,
          fractionDigits: 2,
        },
        tiers: [],
      },
      taxRate: {
        name: '19% incl.',
        amount: 0.19,
        includedInPrice: true,
        country: 'DE',
        id: 'n9ENOU2i',
        subRates: [],
      },
      taxCategory: {
        typeId: 'tax-category',
        id: '72f8835b-53ae-4d3b-bd3b-a17dafd26c99',
      },
      deliveries: [],
      shippingMethod: {
        typeId: 'shipping-method',
        id: '4e09f55b-f33b-47a1-a236-a9785c8da88d',
      },
      taxedPrice: {
        totalNet: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 252,
          fractionDigits: 2,
        },
        totalGross: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 300,
          fractionDigits: 2,
        },
        totalTax: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 48,
          fractionDigits: 2,
        },
      },
      shippingMethodState: 'MatchesCart',
    },
    shippingAddress: {
      firstName: 'Piotr',
      lastName: 'Zieliński',
      streetName: 'Porcelanowa',
      postalCode: '31-543',
      city: 'Kraków',
      country: 'DE',
      phone: '+48796120506',
      email: 'piotrzielinski96@yahoo.com',
    },
    shipping: [],
    lineItems: [
      {
        id: 'f7694139-4230-4e6e-8504-adf7bd4d245c',
        productId: 'd5c95d66-13c8-4729-9248-de8b7544d333',
        productKey: '82398',
        name: {
          en: 'Slip-On Shoes “Olivia” Michael Kors black',
          de: 'Slip-On Schuhe „Olivia“ Michael Kors schwarz',
        },
        productType: {
          typeId: 'product-type',
          id: 'f084fa3e-01bd-4ee2-8c8a-9a18764e8841',
          version: 1,
        },
        productSlug: {
          en: 'michael-kors-slip-on-olivia-43S5OLFP1L-black',
          de: 'michael-kors-slip-on-olivia-43S5OLFP1L-schwarz',
        },
        variant: {
          id: 1,
          sku: 'M0E20000000ELIV',
          key: 'M0E20000000ELIV',
          prices: [
            {
              id: '60f68239-2e2f-4c75-bff5-6e5405b11b9a',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 15625,
                fractionDigits: 2,
              },
            },
            {
              id: '993661a3-6e60-46c8-b71d-a2e57fac94da',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 10246,
                fractionDigits: 2,
              },
              customerGroup: {
                typeId: 'customer-group',
                id: '0c826f37-d10d-439c-bf46-ce9e17deab74',
              },
            },
            {
              id: '50ecf507-a22f-4ce1-a8cf-c7f88a7a32a3',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 15625,
                fractionDigits: 2,
              },
              country: 'US',
            },
            {
              id: 'f3a18448-4816-4b3e-90a8-6deec8479f9d',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 10246,
                fractionDigits: 2,
              },
              customerGroup: {
                typeId: 'customer-group',
                id: '0c826f37-d10d-439c-bf46-ce9e17deab74',
              },
            },
            {
              id: 'e2561b96-18dc-45fd-8251-88949627fbde',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 12500,
                fractionDigits: 2,
              },
              country: 'DE',
            },
            {
              id: '6a7f9ffe-7da3-42ab-a2f4-222397430db1',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 12500,
                fractionDigits: 2,
              },
              country: 'IT',
            },
            {
              id: 'a5322692-49f3-4601-930f-9b5b5fcc28ea',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 12500,
                fractionDigits: 2,
              },
              country: 'GB',
            },
            {
              id: '4cb6e207-65da-4db3-a84b-5ca805e18b18',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 12625,
                fractionDigits: 2,
              },
              country: 'DE',
              channel: {
                typeId: 'channel',
                id: 'd4e8a815-830f-43bf-8506-77de565bf3f3',
              },
            },
            {
              id: '8e2df96a-90e3-446c-a673-d881f27f4f9b',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 16250,
                fractionDigits: 2,
              },
              channel: {
                typeId: 'channel',
                id: '68506b79-8d88-47ab-b77d-5b54cb6eec03',
              },
            },
            {
              id: 'deb05b45-9e7f-4740-83db-8a9e96235724',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 11625,
                fractionDigits: 2,
              },
              country: 'DE',
              channel: {
                typeId: 'channel',
                id: '075f15ed-e66a-49a6-8d61-786145ac1a7a',
              },
            },
            {
              id: '28958de9-a79e-42c6-9a0c-5cd7ac0d24f6',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 13500,
                fractionDigits: 2,
              },
              country: 'DE',
              channel: {
                typeId: 'channel',
                id: 'ffecbfe5-a622-4e1f-8704-ac328d94cfb5',
              },
            },
            {
              id: '1c307d7a-60e7-4b48-8f21-4e3e5631ef63',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 13375,
                fractionDigits: 2,
              },
              country: 'DE',
              channel: {
                typeId: 'channel',
                id: 'c9958b11-6151-433e-83f3-4424e6fa4ac2',
              },
            },
            {
              id: '05c025de-c950-4916-9d1b-3dd903c2e362',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 12625,
                fractionDigits: 2,
              },
              country: 'US',
              channel: {
                typeId: 'channel',
                id: '2259d32b-2c7a-4941-842a-d81fb3c878e7',
              },
            },
            {
              id: '5f22d547-b831-4124-9556-7844b1af4518',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 16250,
                fractionDigits: 2,
              },
              channel: {
                typeId: 'channel',
                id: '0399ae91-a3be-40ef-90cc-11ac36cf8a62',
              },
            },
            {
              id: '8a3ebd9a-834d-43ef-9f27-78f2142cce98',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 11625,
                fractionDigits: 2,
              },
              country: 'US',
              channel: {
                typeId: 'channel',
                id: 'bcaecbbd-bf7c-4f9f-9b4b-c0cbd6240d68',
              },
            },
            {
              id: 'b9a901b0-f5d2-424b-b854-b0eafa985ee8',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 13500,
                fractionDigits: 2,
              },
              country: 'US',
              channel: {
                typeId: 'channel',
                id: '3def0285-22e1-401c-916b-56efb977f18e',
              },
            },
            {
              id: 'be05566e-689a-416b-886f-7a8b31559d00',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 13375,
                fractionDigits: 2,
              },
              country: 'US',
              channel: {
                typeId: 'channel',
                id: 'db86818a-f58b-4df4-8b61-46de85d13a00',
              },
            },
          ],
          images: [
            {
              url: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082398_1_large.jpg',
              dimensions: { w: 0, h: 0 },
            },
          ],
          attributes: [
            { name: 'articleNumberManufacturer', value: '43S5OLFP1L 001' },
            { name: 'articleNumberMax', value: '82398' },
            { name: 'matrixId', value: 'M0E20000000ELIV' },
            { name: 'baseId', value: '82398' },
            {
              name: 'designer',
              value: { key: 'michaelkors', label: 'Michael Kors' },
            },
            { name: 'madeInItaly', value: { key: 'no', label: 'no' } },
            { name: 'commonSize', value: { key: '35', label: '35' } },
            { name: 'size', value: '5' },
            {
              name: 'color',
              value: {
                key: 'black',
                label: { en: 'black', it: 'nero', de: 'schwarz' },
              },
            },
            {
              name: 'colorFreeDefinition',
              value: { en: 'black', de: 'schwarz' },
            },
            { name: 'style', value: { key: 'sporty', label: 'sporty' } },
            { name: 'gender', value: { key: 'women', label: 'Damen' } },
            { name: 'season', value: 's15' },
          ],
          assets: [],
        },
        price: {
          id: 'e2561b96-18dc-45fd-8251-88949627fbde',
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 12500,
            fractionDigits: 2,
          },
          country: 'DE',
        },
        quantity: 1,
        discountedPricePerQuantity: [],
        taxRate: {
          name: '19% incl.',
          amount: 0.19,
          includedInPrice: true,
          country: 'DE',
          id: 'n9ENOU2i',
          subRates: [],
        },
        perMethodTaxRate: [],
        addedAt: '2023-06-01T14:10:58.964Z',
        lastModifiedAt: '2023-06-01T14:10:58.964Z',
        state: [
          {
            quantity: 1,
            state: {
              typeId: 'state',
              id: 'ad3930da-ae5c-4c7e-8ae0-2dfb99d52f50',
            },
          },
        ],
        priceMode: 'Platform',
        lineItemMode: 'Standard',
        totalPrice: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 12500,
          fractionDigits: 2,
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 10504,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 12500,
            fractionDigits: 2,
          },
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 1996,
            fractionDigits: 2,
          },
        },
        taxedPricePortions: [],
        custom: {
          type: { typeId: 'type', id: '69840f60-bd39-4958-b3fc-85bf6c492791' },
          fields: {},
        },
      },
    ],
    customLineItems: [],
    transactionFee: true,
    discountCodes: [],
    directDiscounts: [],
    cart: { typeId: 'cart', id: 'd77489c3-4300-4f22-bea4-71e5d5fc587a' },
    custom: {
      type: { typeId: 'type', id: '22ec137d-4ea0-468f-98e9-f9289ca8bb01' },
      fields: {
        couponsLimit: 5,
        discount_codes: [
          '{"status":"AVAILABLE","value":1250,"banner":"10% off","code":"promo_sBe05RSTPSfUiojdpwueAkTJ","type":"promotion_tier"}',
          '{"status":"AVAILABLE","value":0,"banner":"Get 5% for your first order","code":"promo_1c4Q5taDrKynBgA4aTJGyp0p","type":"promotion_tier"}',
        ],
        shippingProductSourceIds: [],
      },
    },
    billingAddress: {
      firstName: 'Piotr',
      lastName: 'Zieliński',
      streetName: 'Porcelanowa',
      postalCode: '31-543',
      city: 'Kraków',
      country: 'DE',
      phone: '+48796120506',
      email: 'piotrzielinski96@yahoo.com',
    },
    itemShippingAddresses: [],
    refusedGifts: [],
  },
};

export const createOrderItems = [
  {
    source_id: 'M0E20000000ELIV',
    related_object: 'sku',
    quantity: 1,
    price: 12500,
    amount: 12500,
    product: {
      override: true,
      name: 'Slip-On Shoes “Olivia” Michael Kors black',
    },
    sku: {
      override: true,
      sku: 'Slip-On Shoes “Olivia” Michael Kors black',
      metadata: {},
    },
  },
];
export const createOrderOrderCreateObject = {
  source_id: 'c7d08c16-8a75-42dd-93eb-802861128a1d',
  amount: 12500,
  discount_amount: 0,
  items: [
    {
      source_id: 'M0E20000000ELIV',
      related_object: 'sku',
      quantity: 1,
      price: 12500,
      amount: 12500,
      product: {
        override: true,
        name: 'Slip-On Shoes “Olivia” Michael Kors black',
      },
      sku: {
        override: true,
        sku: 'Slip-On Shoes “Olivia” Michael Kors black',
        metadata: {},
      },
    },
  ],
  metadata: {},
  customer: {
    source_id: '03970ec0-fa17-45d6-a19f-208ee3fcb1a4',
    name: 'Piotr Zieliński',
    email: 'piotrzielinski96@yahoo.com',
    address: {
      city: 'Kraków',
      country: 'DE',
      postal_code: '31-543',
      line_1: 'Porcelanowa',
    },
    phone: '+48796120506',
  },
  status: 'PAID',
};
