# reorderActiveOrder

Reorders the items from the currently active order into the cart.

## Parameters

None (uses the currently active order)

## Response

```typescript
{
  success: boolean;
  hasOutOfStockItems: boolean;
  inStockProductsCount: number;
  outOfStockProductsCount: number;
  timestamp: string;
}
```

## Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

// Reorder the active order
const result = await commands.reorderActiveOrder();
console.log(`Added ${result.inStockProductsCount} products to cart`);
if (result.hasOutOfStockItems) {
  console.log(`Warning: ${result.outOfStockProductsCount} products are out of stock`);
}
```

## Notes

- If the cart already has items, it will be cleared automatically before reordering
- Products that are out of stock will not be added to the cart
- The response includes counts of in-stock and out-of-stock products

## Requirements

- An active order must exist (set via the order system)

## Error Handling

- Throws an error if no active order exists
- Throws an error if the reorder operation fails

