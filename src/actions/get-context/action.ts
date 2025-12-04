/**
 * Get context action
 * Calls the getContext action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetContext,
    GetContextResponse
} from "./types";

export const getContext: GetContext = async (): Promise<GetContextResponse> => {
    return await commandsFrameClient.call<undefined, GetContextResponse>("getContext", undefined);
};

