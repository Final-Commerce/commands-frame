/**
 * Add product to cart action
 * Calls the addProductToCart action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddProductToCart,
    AddProductToCartParams,
    AddProductToCartResponse
} from "./types";

export const addProductToCart: AddProductToCart = async (params?: AddProductToCartParams): Promise<AddProductToCartResponse> => {
    return await commandsFrameClient.call<AddProductToCartParams, AddProductToCartResponse>("addProductToCart", params);
};

