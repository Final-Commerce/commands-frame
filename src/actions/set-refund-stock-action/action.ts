/**
 * Set refund stock action
 * Calls the setRefundStockAction action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    SetRefundStockAction,
    SetRefundStockActionParams,
    SetRefundStockActionResponse
} from "./types";

export const setRefundStockAction: SetRefundStockAction = async (params?: SetRefundStockActionParams): Promise<SetRefundStockActionResponse> => {
    return await commandsFrameClient.call<SetRefundStockActionParams, SetRefundStockActionResponse>("setRefundStockAction", params);
};

