/**
 * Terminal payment action
 * Calls the terminalPayment action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    TerminalPayment,
    TerminalPaymentParams,
    TerminalPaymentResponse
} from "./types";

export const terminalPayment: TerminalPayment = async (params?: TerminalPaymentParams): Promise<TerminalPaymentResponse> => {
    return await commandsFrameClient.call<TerminalPaymentParams, TerminalPaymentResponse>("terminalPayment", params);
};

