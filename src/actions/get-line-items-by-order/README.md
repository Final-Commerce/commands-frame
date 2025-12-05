# getLineItemsByOrder

Retrieves line items and custom sales from an order, along with calculated remaining refundable quantities for each item.

## Parameters

`params?: GetLineItemsByOrderParams`

| Parameter | Type   | Required | Description                                                              |
| :-------- | :----- | :------- | :----------------------------------------------------------------------- |
| `orderId` | `string` | `false`  | The ID of the order to retrieve line items from. If not provided, uses the currently active order. |

## Response

`Promise<GetLineItemsByOrderResponse>`

| Field                          | Type                      | Description                               |
| :----------------------------- | :------------------------ | :---------------------------------------- |
| `success`                      | `boolean`                 | `true` if the line items were retrieved successfully. |
| `orderId`                      | `string`                  | The ID of the order.                      |
| `lineItems`                    | `LineItem[]`              | Array of line items in the order.         |
| `customSales`                  | `CustomSale[]`            | Array of custom sales in the order.      |
| `remainingQuantities`          | `Record<string, number>`  | Map of item keys to remaining refundable quantities. |
| `remainingCustomSalesQuantities` | `Record<string, number>`  | Map of custom sale IDs to remaining refundable quantities. |
| `timestamp`                    | `string`                  | ISO date string of when the action occurred. |

## Example Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

try {
  // Get line items for a specific order
  const result = await commands.getLineItemsByOrder({
    orderId: 'order-123'
  });
  console.log('Line items:', result);
  // Expected output:
  // {
  //   success: true,
  //   orderId: 'order-123',
  //   lineItems: [...],
  //   customSales: [...],
  //   remainingQuantities: { 'item-key-1': 2, 'item-key-2': 0 },
  //   remainingCustomSalesQuantities: { 'custom-sale-1': 1 },
  //   timestamp: '2023-10-27T10:00:00.000Z'
  // }

  // Get line items for the currently active order
  const activeOrderItems = await commands.getLineItemsByOrder();
  console.log('Active order line items:', activeOrderItems);

} catch (error) {
  console.error('Failed to get line items:', error);
}
```

## Error Handling

- Throws an error if no order is active and no `orderId` is provided.
- Throws an error if the provided `orderId` is not found.

```typescript
// Example of error when no active order and no orderId
try {
  await commands.getLineItemsByOrder();
} catch (error) {
  console.error(error.message); // "No active order. Please provide an orderId or set an order as active."
}
```

