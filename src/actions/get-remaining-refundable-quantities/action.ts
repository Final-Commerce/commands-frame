/**
 * Get remaining refundable quantities action
 * Calls the getRemainingRefundableQuantities action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetRemainingRefundableQuantities,
    GetRemainingRefundableQuantitiesResponse
} from "./types";

export const getRemainingRefundableQuantities: GetRemainingRefundableQuantities = async (): Promise<GetRemainingRefundableQuantitiesResponse> => {
    return await commandsFrameClient.call<undefined, GetRemainingRefundableQuantitiesResponse>("getRemainingRefundableQuantities");
};

