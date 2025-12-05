/**
 * Open popup action
 * Calls the openPopup action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    OpenPopup,
    OpenPopupParams,
    OpenPopupResponse
} from "./types";

export const openPopup: OpenPopup = async (params?: OpenPopupParams): Promise<OpenPopupResponse> => {
    return await commandsFrameClient.call<OpenPopupParams, OpenPopupResponse>("openPopup", params);
};

