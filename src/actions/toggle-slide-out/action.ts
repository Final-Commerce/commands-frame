/**
 * Toggle slide out action
 * Calls the toggleSlideOut action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ToggleSlideOut,
    ToggleSlideOutParams,
    ToggleSlideOutResponse
} from "./types";

export const toggleSlideOut: ToggleSlideOut = async (params?: ToggleSlideOutParams): Promise<ToggleSlideOutResponse> => {
    return await commandsFrameClient.call<ToggleSlideOutParams, ToggleSlideOutResponse>("toggleSlideOut", params);
};

