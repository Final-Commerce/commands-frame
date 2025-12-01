# Example App for @final-commerce/commands-frame

This is an example application demonstrating how to use the `@final-commerce/commands-frame` library in a React + Vite application.

**Note:** This example is based on a standard Vite + React + TypeScript template, with the `@final-commerce/commands-frame` library added to demonstrate its usage.

## Overview

This example app shows how to:
- Import and use the `commands` API from the library
- Call actions on the parent window from within an iframe
- Handle responses and errors
- Display data received from parent window actions

## Getting Started

1. Navigate to the example directory:
```bash
cd example
```

2. Install dependencies (this will also install `@final-commerce/commands-frame`):
```bash
npm install
```

**Note:** If you're adding this library to your own project, you'll need to configure GitHub Packages authentication. See the [main README](../README.md#option-1-using-npmrc-recommended) for detailed instructions on setting up a GitHub token and configuring `.npmrc`.

Once configured, install the package with:

```bash
npm install @final-commerce/commands-frame
```

Or if you prefer not to use `.npmrc`, see the [main README](../README.md#option-2-using---registry-flag) for instructions on using npm config for authentication.

3. Start the development server:
```bash
npm run dev
```

4. The app will be available at `http://localhost:5179` (or the port shown in the terminal)

## Using the Library

The example demonstrates using the `@final-commerce/commands-frame` library:

```typescript
import { commands } from '@final-commerce/commands-frame';

// Call an action
const result = await commands.exampleFunction({
  param1: 'value1',
  param2: 'value2',
  param3: 'value3',
});

// Get products
const products = await commands.getProducts({});
```

## Testing in an Iframe

This app is designed to run inside an iframe. For production use, you'll typically need HTTPS and a publicly accessible URL. For local development and testing, you can use ngrok to expose your local server.

### Using ngrok (Recommended for Testing)

When testing iframe communication, you usually need:
- **HTTPS** (required for secure iframe communication)
- **Publicly accessible URL** (to embed in parent pages)

ngrok provides both by creating a secure tunnel to your local server.

1. **Install ngrok** (if not already installed):
   
   Download and install ngrok from https://ngrok.com/download

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Note the port number (usually `5179`)

3. **Start ngrok** in a separate terminal:
   ```bash
   ngrok http 5179
   ```
   (Replace `5179` with your actual port if different)

4. **Copy the HTTPS URL** from ngrok output:
   ```
   Forwarding  https://abc123.ngrok-free.app -> http://localhost:5179
   ```

5. **Use the ngrok URL** in your parent page:
   
   This example app is designed to work in an iframe element. Put the HTTPS URL from ngrok output to the iframe element settings page in your Build.

**Note:** The free ngrok URL changes each time you restart ngrok. For a stable URL, consider using ngrok's paid plan or setting up a custom domain.

## Debugging

Enable debug logging by setting the debug flag before importing:

```typescript
// In main.tsx, before any imports
(window as any).__POSTMESSAGE_DEBUG__ = true;
```

This will log all postMessage communication to the console.
