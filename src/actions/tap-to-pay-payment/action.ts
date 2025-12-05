/**
 * Tap to pay payment action
 * Calls the tapToPayPayment action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    TapToPayPayment,
    TapToPayPaymentParams,
    TapToPayPaymentResponse
} from "./types";

export const tapToPayPayment: TapToPayPayment = async (params?: TapToPayPaymentParams): Promise<TapToPayPaymentResponse> => {
    return await commandsFrameClient.call<TapToPayPaymentParams, TapToPayPaymentResponse>("tapToPayPayment", params);
};

