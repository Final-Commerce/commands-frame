/**
 * Set refund line item quantity action
 * Calls the setRefundLineItemQuantity action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    SetRefundLineItemQuantity,
    SetRefundLineItemQuantityParams,
    SetRefundLineItemQuantityResponse
} from "./types";

export const setRefundLineItemQuantity: SetRefundLineItemQuantity = async (params?: SetRefundLineItemQuantityParams): Promise<SetRefundLineItemQuantityResponse> => {
    return await commandsFrameClient.call<SetRefundLineItemQuantityParams, SetRefundLineItemQuantityResponse>("setRefundLineItemQuantity", params);
};

