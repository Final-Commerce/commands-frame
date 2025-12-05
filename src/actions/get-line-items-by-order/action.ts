/**
 * Get line items by order action
 * Calls the getLineItemsByOrder action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetLineItemsByOrder,
    GetLineItemsByOrderParams,
    GetLineItemsByOrderResponse
} from "./types";

export const getLineItemsByOrder: GetLineItemsByOrder = async (params?: GetLineItemsByOrderParams): Promise<GetLineItemsByOrderResponse> => {
    return await commandsFrameClient.call<GetLineItemsByOrderParams, GetLineItemsByOrderResponse>("getLineItemsByOrder", params);
};

