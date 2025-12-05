# resumeParkedOrder

Resumes a previously parked order by loading it back into the cart.

## Parameters

- `orderId` (string, required): The ID of the parked order to resume

## Response

```typescript
{
  success: boolean;
  orderId: string;
  timestamp: string;
}
```

## Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

// Resume a parked order
await commands.resumeParkedOrder({
  orderId: '691df9c6c478bada1fb23d31'
});
```

## Error Handling

- Throws an error if orderId is missing
- Throws an error if the order is not found
- Throws an error if the order cannot be loaded

