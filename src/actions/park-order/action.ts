/**
 * Park order action
 * Calls the parkOrder action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ParkOrder,
    ParkOrderResponse
} from "./types";

export const parkOrder: ParkOrder = async (): Promise<ParkOrderResponse> => {
    return await commandsFrameClient.call<undefined, ParkOrderResponse>("parkOrder", undefined);
};

