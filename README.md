# @final-commerce/commands-frame

A TypeScript library for communication between iframes and their parent windows using postMessage with type safety and error handling.

## Installation

```bash
npm install @final-commerce/commands-frame
```

This package is available on the public NPM registry.

## Usage

```typescript
import { commands } from '@final-commerce/commands-frame';

// Call an action on the parent window
const result = await commands.exampleFunction({
  param1: 'value1',
  param2: 'value2',
  param3: 'value3',
});

// Get products from parent window
const products = await commands.getProducts({});

// Get customers from parent window
const customers = await commands.getCustomers({});

// Add a new customer
const newCustomer = await commands.addCustomer({
  customer: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  },
});

// Assign a customer to the current session
const assignedCustomer = await commands.assignCustomer({
  customerId: 'customer-id-123',
});

// Add a custom sale to the cart
const customSale = await commands.addCustomSale({
  label: 'Custom Item',
  price: 10.00,
  applyTaxes: false,
});
```

## Examples

See the [example/](https://github.com/Final-Commerce/commands-frame/tree/main/example) folder for a working React + Vite demo application that demonstrates how to use this library in a real-world scenario.

To run the example:

```bash
cd example
npm install
npm run dev
```

## API

### `commands`

A namespace object containing all available actions:

- `addCustomSale(params: AddCustomSaleParams): Promise<AddCustomSaleResponse>`
- `getProducts(params?: GetProductsParams): Promise<GetProductsResponse>`
- `getCustomers(params?: GetCustomersParams): Promise<GetCustomersResponse>`
- `addCustomer(params: AddCustomerParams): Promise<AddCustomerResponse>`
- `assignCustomer(params: AssignCustomerParams): Promise<AssignCustomerResponse>`
- `exampleFunction(params?: ExampleFunctionParams): Promise<ExampleFunctionResponse>`

### `addCustomSale`

Adds a custom sale item to the cart in the parent window.

**Parameters:**
- `label` (string, required): The label/name for the custom sale
- `price` (number | string, required): The price of the custom sale
- `applyTaxes` (boolean, optional): Whether to apply taxes to the custom sale (default: false)

**Returns:**
```typescript
{
  success: boolean;
  label: string;
  price: number;
  applyTaxes: boolean;
  timestamp: string;
}
```

### `getProducts`

Retrieves a list of products from the parent application.

**Parameters:**
- `query` (object, optional): Query parameters to filter products

**Returns:**
```typescript
{
  products: Product[];
  timestamp: string;
}
```

### `getCustomers`

Retrieves a list of customers from the parent application.

**Parameters:**
- `query` (object, optional): Query parameters to filter customers

**Returns:**
```typescript
{
  customers: Customer[];
  total: number;
  timestamp: string;
}
```

### `addCustomer`

Adds a new customer to the local database in the parent application.

**Parameters:**
- `customer` (object, required): Customer data object

**Returns:**
```typescript
{
  success: boolean;
  customer: Customer;
  timestamp: string;
}
```

### `assignCustomer`

Assigns an existing customer to the current active session/cart.

**Parameters:**
- `customerId` (string, required): The ID of the customer to assign

**Returns:**
```typescript
{
  success: boolean;
  customer: Customer;
  timestamp: string;
}
```

## Debugging

Enable debug logging by setting the debug flag before importing:

```typescript
(window as any).__POSTMESSAGE_DEBUG__ = true;
import { commands } from '@final-commerce/commands-frame';
```

This will log all postMessage communication to the console.

## License

UNLICENSED

