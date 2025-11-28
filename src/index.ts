import * as actions from "./actions";
import type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse } from "./types";

export const externalActions = {
    exampleFunction: actions.exampleFunction,
    getProducts: actions.getProducts
} as const;

export type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse };

export { iframeActionsClient, IframeActionsClient } from "./client";
export type { PostMessageRequest, PostMessageResponse } from "./client";
