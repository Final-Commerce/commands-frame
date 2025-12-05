/**
 * Get refunds action
 * Calls the getRefunds action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetRefunds,
    GetRefundsParams,
    GetRefundsResponse
} from "./types";

export const getRefunds: GetRefunds = async (params?: GetRefundsParams): Promise<GetRefundsResponse> => {
    return await commandsFrameClient.call<GetRefundsParams, GetRefundsResponse>("getRefunds", params);
};

