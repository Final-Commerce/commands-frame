/**
 * Resume parked order action
 * Calls the resumeParkedOrder action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ResumeParkedOrder,
    ResumeParkedOrderParams,
    ResumeParkedOrderResponse
} from "./types";

export const resumeParkedOrder: ResumeParkedOrder = async (params?: ResumeParkedOrderParams): Promise<ResumeParkedOrderResponse> => {
    return await commandsFrameClient.call<ResumeParkedOrderParams, ResumeParkedOrderResponse>("resumeParkedOrder", params);
};

