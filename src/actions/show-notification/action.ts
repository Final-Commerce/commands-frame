/**
 * Show notification action
 * Calls the showNotification action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ShowNotification,
    ShowNotificationParams,
    ShowNotificationResponse
} from "./types";

export const showNotification: ShowNotification = async (params?: ShowNotificationParams): Promise<ShowNotificationResponse> => {
    return await commandsFrameClient.call<ShowNotificationParams, ShowNotificationResponse>("showNotification", params);
};

