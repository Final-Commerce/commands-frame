/**
 * Reset refund details action
 * Calls the resetRefundDetails action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ResetRefundDetails,
    ResetRefundDetailsResponse
} from "./types";

export const resetRefundDetails: ResetRefundDetails = async (): Promise<ResetRefundDetailsResponse> => {
    return await commandsFrameClient.call<undefined, ResetRefundDetailsResponse>("resetRefundDetails");
};

