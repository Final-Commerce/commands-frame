/**
 * Add order note action
 * Calls the addOrderNote action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddOrderNote,
    AddOrderNoteParams,
    AddOrderNoteResponse
} from "./types";

export const addOrderNote: AddOrderNote = async (params?: AddOrderNoteParams): Promise<AddOrderNoteResponse> => {
    return await commandsFrameClient.call<AddOrderNoteParams, AddOrderNoteResponse>("addOrderNote", params);
};

