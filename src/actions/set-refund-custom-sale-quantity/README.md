# setRefundCustomSaleQuantity

Sets the quantity of a custom sale to include in a refund.

## Parameters

`params: SetRefundCustomSaleQuantityParams`

| Parameter      | Type     | Required | Description                                                              |
| :------------- | :------- | :------- | :----------------------------------------------------------------------- |
| `customSaleId` | `string` | `true`   | The ID of the custom sale.                                               |
| `quantity`     | `number` | `true`   | The quantity to refund (0 to max remaining refundable quantity).         |

## Response

`Promise<SetRefundCustomSaleQuantityResponse>`

| Field          | Type     | Description                               |
| :------------- | :------- | :---------------------------------------- |
| `success`      | `boolean` | `true` if the quantity was set successfully. |
| `customSaleId` | `string` | The custom sale ID that was updated.     |
| `quantity`     | `number` | The quantity that was set.                |
| `timestamp`    | `string` | ISO date string of when the action occurred. |

## Example Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

try {
  // Set quantity to refund for a custom sale
  const result = await commands.setRefundCustomSaleQuantity({
    customSaleId: 'custom-sale-123',
    quantity: 1
  });
  console.log('Refund quantity set:', result);
  // Expected output:
  // {
  //   success: true,
  //   customSaleId: 'custom-sale-123',
  //   quantity: 1,
  //   timestamp: '2023-10-27T10:00:00.000Z'
  // }

  // Set quantity to 0 to remove custom sale from refund
  await commands.setRefundCustomSaleQuantity({
    customSaleId: 'custom-sale-123',
    quantity: 0
  });

} catch (error) {
  console.error('Failed to set refund quantity:', error);
}
```

## Error Handling

- Throws an error if `customSaleId` or `quantity` is missing.
- Throws an error if quantity is negative.
- Throws an error if no order is currently active.
- Throws an error if the custom sale is not found in the order.
- Throws an error if the quantity exceeds the remaining refundable quantity.

```typescript
// Example of error when quantity exceeds remaining
try {
  await commands.setRefundCustomSaleQuantity({
    customSaleId: 'custom-sale-123',
    quantity: 5 // but only 2 remaining
  });
} catch (error) {
  console.error(error.message); // "Quantity 5 exceeds remaining refundable quantity 2 for custom sale custom-sale-123"
}
```

