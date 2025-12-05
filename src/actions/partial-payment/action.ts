/**
 * Partial payment action
 * Calls the partialPayment action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    PartialPayment,
    PartialPaymentParams,
    PartialPaymentResponse
} from "./types";

export const partialPayment: PartialPayment = async (params?: PartialPaymentParams): Promise<PartialPaymentResponse> => {
    return await commandsFrameClient.call<PartialPaymentParams, PartialPaymentResponse>("partialPayment", params);
};

