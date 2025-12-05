/**
 * Go to page action
 * Calls the goToPage action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GoToPage,
    GoToPageParams,
    GoToPageResponse
} from "./types";

export const goToPage: GoToPage = async (params?: GoToPageParams): Promise<GoToPageResponse> => {
    return await commandsFrameClient.call<GoToPageParams, GoToPageResponse>("goToPage", params);
};

