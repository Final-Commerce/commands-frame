/**
 * Set product active action
 * Calls the setProductActive action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    SetProductActive,
    SetProductActiveParams,
    SetProductActiveResponse
} from "./types";

export const setProductActive: SetProductActive = async (params?: SetProductActiveParams): Promise<SetProductActiveResponse> => {
    return await commandsFrameClient.call<SetProductActiveParams, SetProductActiveResponse>("setProductActive", params);
};

