/**
 * Typed action wrappers
 * Each action is a typed function that calls the parent window
 */

import { iframeActionsClient } from "./client";
import type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse } from "./types";

/**
 * Example function action
 * Calls the exampleFunction action on the parent window
 */
export const exampleFunction: ExampleFunction = async (params?: ExampleFunctionParams): Promise<ExampleFunctionResponse> => {
    return await iframeActionsClient.call<ExampleFunctionParams, ExampleFunctionResponse>("exampleFunction", params);
};

/**
 * Get products action
 * Calls the getProducts action on the parent window
 */
export const getProducts: GetProducts = async (params?: GetProductsParams): Promise<GetProductsResponse> => {
    return await iframeActionsClient.call<GetProductsParams, GetProductsResponse>("getProducts", params);
};
