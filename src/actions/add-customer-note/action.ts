/**
 * Add customer note action
 * Calls the addCustomerNote action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddCustomerNote,
    AddCustomerNoteParams,
    AddCustomerNoteResponse
} from "./types";

export const addCustomerNote: AddCustomerNote = async (params?: AddCustomerNoteParams): Promise<AddCustomerNoteResponse> => {
    return await commandsFrameClient.call<AddCustomerNoteParams, AddCustomerNoteResponse>("addCustomerNote", params);
};

