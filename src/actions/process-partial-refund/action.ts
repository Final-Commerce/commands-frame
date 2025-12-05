/**
 * Process partial refund action
 * Calls the processPartialRefund action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ProcessPartialRefund,
    ProcessPartialRefundParams,
    ProcessPartialRefundResponse
} from "./types";

export const processPartialRefund: ProcessPartialRefund = async (params?: ProcessPartialRefundParams): Promise<ProcessPartialRefundResponse> => {
    return await commandsFrameClient.call<ProcessPartialRefundParams, ProcessPartialRefundResponse>("processPartialRefund", params);
};

