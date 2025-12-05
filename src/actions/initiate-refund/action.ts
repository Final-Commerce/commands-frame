/**
 * Initiate refund action
 * Calls the initiateRefund action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    InitiateRefund,
    InitiateRefundParams,
    InitiateRefundResponse
} from "./types";

export const initiateRefund: InitiateRefund = async (params?: InitiateRefundParams): Promise<InitiateRefundResponse> => {
    return await commandsFrameClient.call<InitiateRefundParams, InitiateRefundResponse>("initiateRefund", params);
};

