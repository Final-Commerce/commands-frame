# @final-commerce/commands-frame

A TypeScript library for communication between iframes and their parent windows using postMessage with type safety and error handling.

## Installation

```bash
npm install @final-commerce/commands-frame
```

This package is available on the public NPM registry.

## Table of Contents

- [API Overview](#api-overview)
- [Quick Start](#quick-start)
- [Actions Documentation](#actions-documentation)
- [Examples](#examples)
- [Debugging](#debugging)
- [Type Safety](#type-safety)
- [License](#license)

## API Overview

The library provides a `commands` namespace object containing all available actions. Each action is a typed function that communicates with the parent window via postMessage.

### Available Actions

- **[getCustomers](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/get-customers/README.md)** - Retrieve a list of customers from the parent application
- **[getProducts](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/get-products/README.md)** - Retrieve a list of products from the parent application
- **[addCustomer](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/add-customer/README.md)** - Add a new customer to the local database
- **[assignCustomer](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/assign-customer/README.md)** - Assign an existing customer to the current session/cart
- **[addCustomSale](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/add-custom-sale/README.md)** - Add a custom sale item to the cart
- **[exampleFunction](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/example-function/README.md)** - Example/template function (for reference only)

For detailed documentation on each action, including parameter descriptions, response structures, and usage examples, see the [Actions Documentation](#actions-documentation) section below.

## Quick Start

```typescript
import { commands } from '@final-commerce/commands-frame';

// Get products from parent window
const products = await commands.getProducts();

// Get customers from parent window
const customers = await commands.getCustomers({
    query: {
        email: 'customer@example.com'
    }
});
```

For complete usage examples and detailed parameter descriptions, see the documentation for each action in the [Actions Documentation](#actions-documentation) section.

## Actions Documentation

Each action has detailed documentation with complete parameter descriptions, response structures, and multiple usage examples:

### [getCustomers](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/get-customers/README.md)

Retrieves a list of customers from the parent application's local database. Supports MongoDB query syntax for filtering, text search across name/email/phone fields, and pagination.

### [getProducts](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/get-products/README.md)

Retrieves a list of products from the parent application's local database. Supports filtering by name, SKU, status, product type, categories, tags, and more.

### [addCustomer](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/add-customer/README.md)

Adds a new customer to the local database in the parent application. Supports full customer structure including addresses, metadata, notes, and tags.

### [assignCustomer](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/assign-customer/README.md)

Assigns an existing customer to the current active session/cart. The customer must exist in the local database.

### [addCustomSale](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/add-custom-sale/README.md)

Adds a custom sale item to the cart in the parent window. Useful for adding non-product items like service fees, discounts, or custom charges.

### [exampleFunction](https://github.com/Final-Commerce/commands-frame/blob/main/src/actions/example-function/README.md)

An example/template function for reference. See the documentation for the structure to follow when creating new actions.

## Examples

See the [example/](https://github.com/Final-Commerce/commands-frame/tree/main/example) folder for a working React + Vite demo application that demonstrates how to use this library in a real-world scenario.

To run the example:

```bash
cd example
npm install
npm run dev
```

## Debugging

Enable debug logging by setting the debug flag before importing:

```typescript
(window as any).__POSTMESSAGE_DEBUG__ = true;
import { commands } from '@final-commerce/commands-frame';
```

This will log all postMessage communication to the console, including:
- Request details (action name, parameters, request ID)
- Response details (success status, data, errors)
- Timing information
- Origin validation

## Type Safety

All actions are fully typed with TypeScript. Import types for use in your code:

```typescript
import type {
    GetCustomersParams,
    GetCustomersResponse,
    Customer,
    GetProductsParams,
    GetProductsResponse,
    Product,
    AddCustomerParams,
    AddCustomerResponse,
    AssignCustomerParams,
    AssignCustomerResponse,
    AddCustomSaleParams,
    AddCustomSaleResponse
} from '@final-commerce/commands-frame';
```

## License

UNLICENSED
