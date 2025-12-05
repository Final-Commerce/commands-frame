# tapToPayPayment

Initiates a tap-to-pay payment for the current cart.

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

// Pay with tap to pay using cart total
await commands.tapToPayPayment();

// Pay with tap to pay for a specific amount
await commands.tapToPayPayment({
  amount: 50.00
});
```

## Notes

- The actual payment processing happens through the parent application's payment system
- Requires the cart to have items
- May request tip if tip functionality is enabled

## Error Handling

- Throws an error if the cart is empty
- May throw an error if payment processing fails

