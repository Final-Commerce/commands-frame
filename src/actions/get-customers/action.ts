/**
 * Get customers action
 * Calls the getCustomers action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetCustomers,
    GetCustomersParams,
    GetCustomersResponse
} from "./types";

export const getCustomers: GetCustomers = async (params?: GetCustomersParams): Promise<GetCustomersResponse> => {
    return await commandsFrameClient.call<GetCustomersParams, GetCustomersResponse>("getCustomers", params);
};

