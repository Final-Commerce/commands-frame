# parkOrder

Parks (saves) the current order for later retrieval. The cart is cleared after parking.

## Parameters

None

## Response

```typescript
{
  success: boolean;
  timestamp: string;
}
```

## Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

// Park the current order
await commands.parkOrder();
```

## Notes

- The cart is automatically cleared after parking the order
- Parked orders can be retrieved using `resumeParkedOrder`
- Parked orders can be deleted using `deleteParkedOrder`

## Error Handling

- May throw an error if the order cannot be saved to the database

