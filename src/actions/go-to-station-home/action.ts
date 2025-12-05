/**
 * Go to station home action
 * Calls the goToStationHome action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GoToStationHome,
    GoToStationHomeResponse
} from "./types";

export const goToStationHome: GoToStationHome = async (): Promise<GoToStationHomeResponse> => {
    return await commandsFrameClient.call<undefined, GoToStationHomeResponse>("goToStationHome", undefined);
};

