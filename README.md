# @final-commerce/commands-frame

A TypeScript library for communication between iframes and their parent windows using postMessage with type safety and error handling.

## Installation

```bash
npm install @final-commerce/commands-frame
```

**Note:** This package is published to GitHub Packages. Make sure you have access to the `@final-commerce` organization and have configured your `.npmrc` file:

```
@final-commerce:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Usage

```typescript
import { externalActions } from '@final-commerce/commands-frame';

// Call an action on the parent window
const result = await externalActions.exampleFunction({
  param1: 'value1',
  param2: 'value2',
  param3: 'value3',
});

// Get products from parent window
const products = await externalActions.getProducts({});
```

## Features

- ✅ Type-safe action calls with TypeScript
- ✅ Automatic error handling and timeouts
- ✅ Promise-based API
- ✅ Debug logging support
- ✅ Origin validation for security

## Examples

See the [example/](./example/) folder for a working React + Vite demo application that demonstrates how to use this library in a real-world scenario.

To run the example:

```bash
cd example
npm install
npm run dev
```

## API

### `externalActions`

A namespace object containing all available actions:

- `exampleFunction(params?: ExampleFunctionParams): Promise<ExampleFunctionResponse>`
- `getProducts(params?: GetProductsParams): Promise<GetProductsResponse>`

### Advanced Usage

For more control, you can use the client directly:

```typescript
import { CommandsFrameClient } from '@final-commerce/commands-frame';

const client = new CommandsFrameClient({
  timeout: 30000,  // 30 seconds
  origin: 'https://example.com'  // Specific origin (use '*' for any origin)
});

const result = await client.call('actionName', params);
```

## Debugging

Enable debug logging by setting the debug flag before importing:

```typescript
(window as any).__POSTMESSAGE_DEBUG__ = true;
import { externalActions } from '@final-commerce/commands-frame';
```

This will log all postMessage communication to the console.

## License

UNLICENSED

