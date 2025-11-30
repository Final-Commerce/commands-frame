import * as actions from "./actions";
import type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse } from "./types";

export const commands = {
    exampleFunction: actions.exampleFunction,
    getProducts: actions.getProducts
} as const;

export type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse };

export { commandsFrameClient, CommandsFrameClient } from "./client";
export type { PostMessageRequest, PostMessageResponse } from "./client";
