import * as actions from "./actions";
import type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse, AddCustomSale, AddCustomSaleParams, AddCustomSaleResponse } from "./types";

export const commands = {
    exampleFunction: actions.exampleFunction,
    getProducts: actions.getProducts,
    addCustomSale: actions.addCustomSale
} as const;

export type { ExampleFunction, ExampleFunctionParams, ExampleFunctionResponse, GetProducts, GetProductsParams, GetProductsResponse, AddCustomSale, AddCustomSaleParams, AddCustomSaleResponse };

export { commandsFrameClient, CommandsFrameClient } from "./client";
export type { PostMessageRequest, PostMessageResponse } from "./client";
