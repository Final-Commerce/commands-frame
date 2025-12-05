/**
 * Calculate refund total action
 * Calls the calculateRefundTotal action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    CalculateRefundTotal,
    CalculateRefundTotalResponse
} from "./types";

export const calculateRefundTotal: CalculateRefundTotal = async (): Promise<CalculateRefundTotalResponse> => {
    return await commandsFrameClient.call<undefined, CalculateRefundTotalResponse>("calculateRefundTotal");
};

