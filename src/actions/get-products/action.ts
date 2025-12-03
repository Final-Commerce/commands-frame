/**
 * Get products action
 * Calls the getProducts action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetProducts,
    GetProductsParams,
    GetProductsResponse
} from "./types";

export const getProducts: GetProducts = async (params?: GetProductsParams): Promise<GetProductsResponse> => {
    return await commandsFrameClient.call<GetProductsParams, GetProductsResponse>("getProducts", params);
};

