/**
 * Add product fee action
 * Calls the addProductFee action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddProductFee,
    AddProductFeeParams,
    AddProductFeeResponse
} from "./types";

export const addProductFee: AddProductFee = async (params?: AddProductFeeParams): Promise<AddProductFeeResponse> => {
    return await commandsFrameClient.call<AddProductFeeParams, AddProductFeeResponse>("addProductFee", params);
};

