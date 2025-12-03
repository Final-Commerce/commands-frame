/**
 * Add custom sale action
 * Calls the addCustomSale action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddCustomSale,
    AddCustomSaleParams,
    AddCustomSaleResponse
} from "./types";

export const addCustomSale: AddCustomSale = async (params?: AddCustomSaleParams): Promise<AddCustomSaleResponse> => {
    return await commandsFrameClient.call<AddCustomSaleParams, AddCustomSaleResponse>("addCustomSale", params);
};

