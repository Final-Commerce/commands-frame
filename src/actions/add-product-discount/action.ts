/**
 * Add product discount action
 * Calls the addProductDiscount action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddProductDiscount,
    AddProductDiscountParams,
    AddProductDiscountResponse
} from "./types";

export const addProductDiscount: AddProductDiscount = async (params?: AddProductDiscountParams): Promise<AddProductDiscountResponse> => {
    return await commandsFrameClient.call<AddProductDiscountParams, AddProductDiscountResponse>("addProductDiscount", params);
};

