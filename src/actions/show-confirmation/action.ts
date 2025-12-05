/**
 * Show confirmation action
 * Calls the showConfirmation action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ShowConfirmation,
    ShowConfirmationParams,
    ShowConfirmationResponse
} from "./types";

export const showConfirmation: ShowConfirmation = async (params?: ShowConfirmationParams): Promise<ShowConfirmationResponse> => {
    return await commandsFrameClient.call<ShowConfirmationParams, ShowConfirmationResponse>("showConfirmation", params);
};

