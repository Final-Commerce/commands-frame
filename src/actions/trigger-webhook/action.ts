/**
 * Trigger webhook action
 * Calls the triggerWebhook action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    TriggerWebhook,
    TriggerWebhookParams,
    TriggerWebhookResponse
} from "./types";

export const triggerWebhook: TriggerWebhook = async (params?: TriggerWebhookParams): Promise<TriggerWebhookResponse> => {
    return await commandsFrameClient.call<TriggerWebhookParams, TriggerWebhookResponse>("triggerWebhook", params);
};

