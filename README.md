# @final-commerce/commands-frame

A TypeScript library for communication between iframes and their parent windows using postMessage with type safety and error handling.

## Installation

```bash
npm install @final-commerce/commands-frame
```

**Note:** This package is published to GitHub Packages. You can install it in one of two ways:

### Option 1: Using `.npmrc` (Recommended)

1. **Create a GitHub Personal Access Token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a descriptive name (e.g., "npm-packages")
   - Select the following permissions:
     - ✅ `read:packages` (required to download packages)
   - Click "Generate token" and **copy the token immediately** (you won't be able to see it again)

2. **Configure your `.npmrc` file:**

   Add the following to your project's `.npmrc` file (or create one if it doesn't exist):

   ```
   @final-commerce:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

   Replace `YOUR_GITHUB_TOKEN` with the token you created in step 1.

### Option 2: Using `--registry` flag

Alternatively, you can set the token using npm config and specify the registry directly:
```bash
npm config set //npm.pkg.github.com/:_authToken your_token
npm install @final-commerce/commands-frame --registry=https://npm.pkg.github.com
```

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

- `exampleFunction(params?: ExampleFunctionParams): Promise<ExampleFunctionResponse>`
- `getProducts(params?: GetProductsParams): Promise<GetProductsResponse>`
- `addCustomSale(params?: AddCustomSaleParams): Promise<AddCustomSaleResponse>`

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

**Example:**
```typescript
const result = await commands.addCustomSale({
  label: 'Service Fee',
  price: 5.50,
  applyTaxes: true,
});
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

