/**
 * Clear cart action
 * Calls the clearCart action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ClearCart,
    ClearCartResponse
} from "./types";

export const clearCart: ClearCart = async (): Promise<ClearCartResponse> => {
    return await commandsFrameClient.call<undefined, ClearCartResponse>("clearCart", undefined);
};

