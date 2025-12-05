# setRefundLineItemQuantity

Sets the quantity of a specific line item to include in a refund.

## Parameters

`params: SetRefundLineItemQuantityParams`

| Parameter | Type     | Required | Description                                                              |
| :-------- | :------- | :------- | :----------------------------------------------------------------------- |
| `itemKey` | `string` | `true`   | The internal ID or variant ID of the line item.                          |
| `quantity` | `number` | `true`   | The quantity to refund (0 to max remaining refundable quantity).         |

## Response

`Promise<SetRefundLineItemQuantityResponse>`

| Field       | Type     | Description                               |
| :---------- | :------- | :---------------------------------------- |
| `success`   | `boolean` | `true` if the quantity was set successfully. |
| `itemKey`   | `string` | The item key that was updated.           |
| `quantity`  | `number` | The quantity that was set.                |
| `timestamp` | `string` | ISO date string of when the action occurred. |

## Example Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

try {
  // Set quantity to refund for a line item
  const result = await commands.setRefundLineItemQuantity({
    itemKey: 'variant-id-123',
    quantity: 2
  });
  console.log('Refund quantity set:', result);
  // Expected output:
  // {
  //   success: true,
  //   itemKey: 'variant-id-123',
  //   quantity: 2,
  //   timestamp: '2023-10-27T10:00:00.000Z'
  // }

  // Set quantity to 0 to remove item from refund
  await commands.setRefundLineItemQuantity({
    itemKey: 'variant-id-123',
    quantity: 0
  });

} catch (error) {
  console.error('Failed to set refund quantity:', error);
}
```

## Error Handling

- Throws an error if `itemKey` or `quantity` is missing.
- Throws an error if quantity is negative.
- Throws an error if no order is currently active.
- Throws an error if the line item is not found in the order.
- Throws an error if the quantity exceeds the remaining refundable quantity.

```typescript
// Example of error when quantity exceeds remaining
try {
  await commands.setRefundLineItemQuantity({
    itemKey: 'variant-id-123',
    quantity: 10 // but only 5 remaining
  });
} catch (error) {
  console.error(error.message); // "Quantity 10 exceeds remaining refundable quantity 5 for item variant-id-123"
}
```

