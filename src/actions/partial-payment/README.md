# partialPayment

Initiates a partial/split payment for the current cart.

## Parameters

- `openUI` (boolean, optional): If true, opens the split payment UI. If false, processes the payment with the specified amount.
- `amount` (number, optional): The payment amount (required if openUI is false)
- `isPercent` (boolean, optional): Whether the amount is a percentage (default: false)

## Response

```typescript
{
  success: boolean;
  amount?: number;
  isPercent?: boolean;
  openUI: boolean;
  timestamp: string;
}
```

## Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

// Open the split payment UI
await commands.partialPayment({
  openUI: true
});

// Process a partial payment with a fixed amount
await commands.partialPayment({
  amount: 25.00,
  isPercent: false
});

// Process a partial payment with a percentage
await commands.partialPayment({
  amount: 50,
  isPercent: true
});
```

## Requirements

- The cart must have items

## Error Handling

- Throws an error if the cart is empty
- Throws an error if amount is missing when openUI is false

