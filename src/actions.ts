/**
 * Typed action wrappers
 * Each action is a typed function that calls the parent window
 */

import { commandsFrameClient } from "./client";
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

/**
 * Example function action
 * Calls the exampleFunction action on the parent window
 */
export const exampleFunction: ExampleFunction = async (params?: ExampleFunctionParams): Promise<ExampleFunctionResponse> => {
    return await commandsFrameClient.call<ExampleFunctionParams, ExampleFunctionResponse>("exampleFunction", params);
};

/**
 * Get products action
 * Calls the getProducts action on the parent window
 */
export const getProducts: GetProducts = async (params?: GetProductsParams): Promise<GetProductsResponse> => {
    return await commandsFrameClient.call<GetProductsParams, GetProductsResponse>("getProducts", params);
};

/**
 * Add custom sale action
 * Calls the addCustomSale action on the parent window
 */
export const addCustomSale: AddCustomSale = async (params?: AddCustomSaleParams): Promise<AddCustomSaleResponse> => {
    return await commandsFrameClient.call<AddCustomSaleParams, AddCustomSaleResponse>("addCustomSale", params);
};

/**
 * Get customers action
 * Calls the getCustomers action on the parent window
 */
export const getCustomers: GetCustomers = async (params?: GetCustomersParams): Promise<GetCustomersResponse> => {
    return await commandsFrameClient.call<GetCustomersParams, GetCustomersResponse>("getCustomers", params);
};

/**
 * Assign customer action
 * Calls the assignCustomer action on the parent window
 */
export const assignCustomer: AssignCustomer = async (params: AssignCustomerParams): Promise<AssignCustomerResponse> => {
    return await commandsFrameClient.call<AssignCustomerParams, AssignCustomerResponse>("assignCustomer", params);
};

/**
 * Add customer action
 * Calls the addCustomer action on the parent window
 */
export const addCustomer: AddCustomer = async (params: AddCustomerParams): Promise<AddCustomerResponse> => {
    return await commandsFrameClient.call<AddCustomerParams, AddCustomerResponse>("addCustomer", params);
};
