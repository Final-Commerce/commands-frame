/**
 * Open cash drawer action
 * Calls the openCashDrawer action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    OpenCashDrawer,
    OpenCashDrawerResponse
} from "./types";

export const openCashDrawer: OpenCashDrawer = async (): Promise<OpenCashDrawerResponse> => {
    return await commandsFrameClient.call<undefined, OpenCashDrawerResponse>("openCashDrawer", undefined);
};

