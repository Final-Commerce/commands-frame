/**
 * Set refund custom sale quantity action
 * Calls the setRefundCustomSaleQuantity action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    SetRefundCustomSaleQuantity,
    SetRefundCustomSaleQuantityParams,
    SetRefundCustomSaleQuantityResponse
} from "./types";

export const setRefundCustomSaleQuantity: SetRefundCustomSaleQuantity = async (params: SetRefundCustomSaleQuantityParams): Promise<SetRefundCustomSaleQuantityResponse> => {
    return await commandsFrameClient.call<SetRefundCustomSaleQuantityParams, SetRefundCustomSaleQuantityResponse>("setRefundCustomSaleQuantity", params);
};

