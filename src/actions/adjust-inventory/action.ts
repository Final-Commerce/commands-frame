/**
 * Adjust inventory action
 * Calls the adjustInventory action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AdjustInventory,
    AdjustInventoryParams,
    AdjustInventoryResponse
} from "./types";

export const adjustInventory: AdjustInventory = async (params?: AdjustInventoryParams): Promise<AdjustInventoryResponse> => {
    return await commandsFrameClient.call<AdjustInventoryParams, AdjustInventoryResponse>("adjustInventory", params);
};

