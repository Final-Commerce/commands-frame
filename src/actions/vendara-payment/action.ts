/**
 * Vendara payment action
 * Calls the vendaraPayment action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    VendaraPayment,
    VendaraPaymentParams,
    VendaraPaymentResponse
} from "./types";

export const vendaraPayment: VendaraPayment = async (params?: VendaraPaymentParams): Promise<VendaraPaymentResponse> => {
    return await commandsFrameClient.call<VendaraPaymentParams, VendaraPaymentResponse>("vendaraPayment", params);
};

