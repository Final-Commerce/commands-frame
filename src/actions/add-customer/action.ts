/**
 * Add customer action
 * Calls the addCustomer action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddCustomer,
    AddCustomerParams,
    AddCustomerResponse
} from "./types";

export const addCustomer: AddCustomer = async (params: AddCustomerParams): Promise<AddCustomerResponse> => {
    return await commandsFrameClient.call<AddCustomerParams, AddCustomerResponse>("addCustomer", params);
};

