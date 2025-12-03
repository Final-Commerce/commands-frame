/**
 * Assign customer action
 * Calls the assignCustomer action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AssignCustomer,
    AssignCustomerParams,
    AssignCustomerResponse
} from "./types";

export const assignCustomer: AssignCustomer = async (params: AssignCustomerParams): Promise<AssignCustomerResponse> => {
    return await commandsFrameClient.call<AssignCustomerParams, AssignCustomerResponse>("assignCustomer", params);
};

