/**
 * Delete parked order action
 * Calls the deleteParkedOrder action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    DeleteParkedOrder,
    DeleteParkedOrderParams,
    DeleteParkedOrderResponse
} from "./types";

export const deleteParkedOrder: DeleteParkedOrder = async (params?: DeleteParkedOrderParams): Promise<DeleteParkedOrderResponse> => {
    return await commandsFrameClient.call<DeleteParkedOrderParams, DeleteParkedOrderResponse>("deleteParkedOrder", params);
};

