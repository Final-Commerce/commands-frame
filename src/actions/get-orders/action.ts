/**
 * Get orders action
 * Calls the getOrders action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetOrders,
    GetOrdersParams,
    GetOrdersResponse
} from "./types";

export const getOrders: GetOrders = async (params?: GetOrdersParams): Promise<GetOrdersResponse> => {
    return await commandsFrameClient.call<GetOrdersParams, GetOrdersResponse>("getOrders", params);
};

