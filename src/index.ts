import * as actions from "./actions";
import type {
    ExampleFunction,
    ExampleFunctionParams,
    ExampleFunctionResponse,
    GetProducts,
    GetProductsParams,
    GetProductsResponse,
    AddCustomSale,
    AddCustomSaleParams,
    AddCustomSaleResponse,
    GetCustomers,
    GetCustomersParams,
    GetCustomersResponse,
    AssignCustomer,
    AssignCustomerParams,
    AssignCustomerResponse,
    AddCustomer,
    AddCustomerParams,
    AddCustomerResponse
} from "./types";

export const commands = {
    exampleFunction: actions.exampleFunction,
    getProducts: actions.getProducts,
    addCustomSale: actions.addCustomSale,
    getCustomers: actions.getCustomers,
    assignCustomer: actions.assignCustomer,
    addCustomer: actions.addCustomer
} as const;

export type {
    ExampleFunction,
    ExampleFunctionParams,
    ExampleFunctionResponse,
    GetProducts,
    GetProductsParams,
    GetProductsResponse,
    AddCustomSale,
    AddCustomSaleParams,
    AddCustomSaleResponse,
    GetCustomers,
    GetCustomersParams,
    GetCustomersResponse,
    AssignCustomer,
    AssignCustomerParams,
    AssignCustomerResponse,
    AddCustomer,
    AddCustomerParams,
    AddCustomerResponse
};

export { commandsFrameClient, CommandsFrameClient } from "./client";
export type { PostMessageRequest, PostMessageResponse } from "./client";
