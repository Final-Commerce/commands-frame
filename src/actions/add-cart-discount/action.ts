/**
 * Add cart discount action
 * Calls the addCartDiscount action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AddCartDiscount,
    AddCartDiscountParams,
    AddCartDiscountResponse
} from "./types";

export const addCartDiscount: AddCartDiscount = async (params?: AddCartDiscountParams): Promise<AddCartDiscountResponse> => {
    return await commandsFrameClient.call<AddCartDiscountParams, AddCartDiscountResponse>("addCartDiscount", params);
};

