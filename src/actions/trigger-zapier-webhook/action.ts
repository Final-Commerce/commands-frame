/**
 * Trigger Zapier webhook action
 * Calls the triggerZapierWebhook action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    TriggerZapierWebhook,
    TriggerZapierWebhookParams,
    TriggerZapierWebhookResponse
} from "./types";

export const triggerZapierWebhook: TriggerZapierWebhook = async (params?: TriggerZapierWebhookParams): Promise<TriggerZapierWebhookResponse> => {
    return await commandsFrameClient.call<TriggerZapierWebhookParams, TriggerZapierWebhookResponse>("triggerZapierWebhook", params);
};

