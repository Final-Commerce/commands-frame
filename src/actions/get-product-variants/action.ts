/**
 * Get product variants action
 * Calls the getProductVariants action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetProductVariants,
    GetProductVariantsParams,
    GetProductVariantsResponse
} from "./types";

export const getProductVariants: GetProductVariants = async (params?: GetProductVariantsParams): Promise<GetProductVariantsResponse> => {
    return await commandsFrameClient.call<GetProductVariantsParams, GetProductVariantsResponse>("getProductVariants", params);
};

