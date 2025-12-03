// Import actions from new folder structure
import { exampleFunction } from "./actions/example-function/action";
import { getProducts } from "./actions/get-products/action";
import { addCustomSale } from "./actions/add-custom-sale/action";
import { getCustomers } from "./actions/get-customers/action";
import { assignCustomer } from "./actions/assign-customer/action";
import { addCustomer } from "./actions/add-customer/action";

// Export actions as commands object
export const commands = {
    exampleFunction,
    getProducts,
    addCustomSale,
    getCustomers,
    assignCustomer,
    addCustomer
} as const;

// Export types from action folders (only Params, Response, and Function types)
export type {
    ExampleFunction,
    ExampleFunctionParams,
    ExampleFunctionResponse
} from "./actions/example-function/types";

export type {
    GetProducts,
    GetProductsParams,
    GetProductsResponse
} from "./actions/get-products/types";

export type {
    AddCustomSale,
    AddCustomSaleParams,
    AddCustomSaleResponse
} from "./actions/add-custom-sale/types";

export type {
    GetCustomers,
    GetCustomersParams,
    GetCustomersResponse
} from "./actions/get-customers/types";

export type {
    AssignCustomer,
    AssignCustomerParams,
    AssignCustomerResponse
} from "./actions/assign-customer/types";

export type {
    AddCustomer,
    AddCustomerParams,
    AddCustomerResponse
} from "./actions/add-customer/types";

// Export client
export { commandsFrameClient, CommandsFrameClient } from "./client";
export type { PostMessageRequest, PostMessageResponse } from "./client";
