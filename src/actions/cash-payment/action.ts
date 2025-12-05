/**
 * Cash payment action
 * Calls the cashPayment action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    CashPayment,
    CashPaymentParams,
    CashPaymentResponse
} from "./types";

export const cashPayment: CashPayment = async (params?: CashPaymentParams): Promise<CashPaymentResponse> => {
    return await commandsFrameClient.call<CashPaymentParams, CashPaymentResponse>("cashPayment", params);
};

