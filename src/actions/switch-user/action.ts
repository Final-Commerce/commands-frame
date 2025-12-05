/**
 * Switch user action
 * Calls the switchUser action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    SwitchUser,
    SwitchUserParams,
    SwitchUserResponse
} from "./types";

export const switchUser: SwitchUser = async (params?: SwitchUserParams): Promise<SwitchUserResponse> => {
    return await commandsFrameClient.call<SwitchUserParams, SwitchUserResponse>("switchUser", params);
};

