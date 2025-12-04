// Import actions from new folder structure
import { exampleFunction } from "./actions/example-function/action";
import { getProducts } from "./actions/get-products/action";
import { addCustomSale } from "./actions/add-custom-sale/action";
import { getCustomers } from "./actions/get-customers/action";
import { assignCustomer } from "./actions/assign-customer/action";
import { addCustomer } from "./actions/add-customer/action";
import { getCategories } from "./actions/get-categories/action";
import { getProductVariants } from "./actions/get-product-variants/action";
import { addCartDiscount } from "./actions/add-cart-discount/action";
import { setProductActive } from "./actions/set-product-active/action";
import { addProductDiscount } from "./actions/add-product-discount/action";
import { addProductToCart } from "./actions/add-product-to-cart/action";

// Export actions as commands object
export const commands = {
    exampleFunction,
    getProducts,
    addCustomSale,
    getCustomers,
    assignCustomer,
    addCustomer,
    getCategories,
    getProductVariants,
    setProductActive,
    addProductDiscount,
    addProductToCart,
    addCartDiscount
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

export type {
    GetCategories,
    GetCategoriesParams,
    GetCategoriesResponse
} from "./actions/get-categories/types";

export type {
    GetProductVariants,
    GetProductVariantsParams,
    GetProductVariantsResponse
} from "./actions/get-product-variants/types";

export type {
    SetProductActive,
    SetProductActiveParams,
    SetProductActiveResponse
} from "./actions/set-product-active/types";

export type {
    AddProductDiscount,
    AddProductDiscountParams,
    AddProductDiscountResponse
} from "./actions/add-product-discount/types";

export type {
    AddProductToCart,
    AddProductToCartParams,
    AddProductToCartResponse
} from "./actions/add-product-to-cart/types";

export type {
    AddCartDiscount,
    AddCartDiscountParams,
    AddCartDiscountResponse
} from "./actions/add-cart-discount/types";

// Export client
export { commandsFrameClient, CommandsFrameClient } from "./client";
export type { PostMessageRequest, PostMessageResponse } from "./client";
