/**
 * Update customer facing display action
 * Calls the updateCustomerFacingDisplay action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    UpdateCustomerFacingDisplay,
    UpdateCustomerFacingDisplayParams,
    UpdateCustomerFacingDisplayResponse
} from "./types";

export const updateCustomerFacingDisplay: UpdateCustomerFacingDisplay = async (params?: UpdateCustomerFacingDisplayParams): Promise<UpdateCustomerFacingDisplayResponse> => {
    return await commandsFrameClient.call<UpdateCustomerFacingDisplayParams, UpdateCustomerFacingDisplayResponse>("updateCustomerFacingDisplay", params);
};

