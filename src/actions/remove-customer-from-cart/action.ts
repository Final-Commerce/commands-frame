/**
 * Remove customer from cart action
 * Calls the removeCustomerFromCart action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    RemoveCustomerFromCart,
    RemoveCustomerFromCartResponse
} from "./types";

export const removeCustomerFromCart: RemoveCustomerFromCart = async (): Promise<RemoveCustomerFromCartResponse> => {
    return await commandsFrameClient.call<undefined, RemoveCustomerFromCartResponse>("removeCustomerFromCart", undefined);
};

