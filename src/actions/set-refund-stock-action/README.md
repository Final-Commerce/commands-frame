# setRefundStockAction

Sets the stock handling option for a refunded line item (restock or mark as damaged).

## Parameters

`params: SetRefundStockActionParams`

| Parameter | Type                      | Required | Description                                                              |
| :-------- | :------------------------ | :------- | :----------------------------------------------------------------------- |
| `itemKey` | `string`                  | `true`   | The internal ID or variant ID of the line item.                          |
| `action`  | `'RESTOCK' \| 'REFUND_DAMAGE'` | `true`   | The stock handling action: 'RESTOCK' to return to stock, 'REFUND_DAMAGE' to mark as damaged. |

## Response

`Promise<SetRefundStockActionResponse>`

| Field       | Type     | Description                               |
| :---------- | :------- | :---------------------------------------- |
| `success`   | `boolean` | `true` if the stock action was set successfully. |
| `itemKey`   | `string` | The item key that was updated.           |
| `action`    | `string` | The action that was set.                 |
| `timestamp` | `string` | ISO date string of when the action occurred. |

## Example Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

try {
  // Set stock action to restock
  const result = await commands.setRefundStockAction({
    itemKey: 'variant-id-123',
    action: 'RESTOCK'
  });
  console.log('Stock action set:', result);
  // Expected output:
  // {
  //   success: true,
  //   itemKey: 'variant-id-123',
  //   action: 'RESTOCK',
  //   timestamp: '2023-10-27T10:00:00.000Z'
  // }

  // Set stock action to mark as damaged
  await commands.setRefundStockAction({
    itemKey: 'variant-id-123',
    action: 'REFUND_DAMAGE'
  });

} catch (error) {
  console.error('Failed to set stock action:', error);
}
```

## Error Handling

- Throws an error if `itemKey` or `action` is missing.
- Throws an error if action is not 'RESTOCK' or 'REFUND_DAMAGE'.
- Throws an error if no order is currently active.
- Throws an error if the line item is not found in the order.

```typescript
// Example of error when action is invalid
try {
  await commands.setRefundStockAction({
    itemKey: 'variant-id-123',
    action: 'INVALID' as any
  });
} catch (error) {
  console.error(error.message); // "Action must be either 'RESTOCK' or 'REFUND_DAMAGE'"
}
```

