/**
 * Get current cart action
 * Calls the getCurrentCart action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetCurrentCart,
    GetCurrentCartResponse
} from "./types";

export const getCurrentCart: GetCurrentCart = async (): Promise<GetCurrentCartResponse> => {
    return await commandsFrameClient.call<undefined, GetCurrentCartResponse>("getCurrentCart");
};

