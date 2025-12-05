/**
 * Reorder active order action
 * Calls the reorderActiveOrder action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ReorderActiveOrder,
    ReorderActiveOrderResponse
} from "./types";

export const reorderActiveOrder: ReorderActiveOrder = async (): Promise<ReorderActiveOrderResponse> => {
    return await commandsFrameClient.call<undefined, ReorderActiveOrderResponse>("reorderActiveOrder", undefined);
};

