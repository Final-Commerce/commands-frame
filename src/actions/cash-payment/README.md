# cashPayment

Initiates a cash payment for the current cart.

## Parameters

- `amount` (number, optional): The payment amount. If not provided, uses the cart total.

## Response

```typescript
{
  success: boolean;
  amount: number;
  paymentType: string;
  timestamp: string;
}
```

## Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

// Pay with cash using cart total
await commands.cashPayment();

// Pay with cash for a specific amount
await commands.cashPayment({
  amount: 50.00
});
```

## Notes

- Opens the cash payment UI if change calculation is enabled
- The actual payment processing happens through the parent application's payment system
- Requires the cart to have items

## Error Handling

- Throws an error if the cart is empty
- May throw an error if payment processing fails

