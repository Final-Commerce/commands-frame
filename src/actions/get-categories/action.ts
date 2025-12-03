/**
 * Get categories action
 * Calls the getCategories action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    GetCategories,
    GetCategoriesParams,
    GetCategoriesResponse
} from "./types";

export const getCategories: GetCategories = async (params?: GetCategoriesParams): Promise<GetCategoriesResponse> => {
    return await commandsFrameClient.call<GetCategoriesParams, GetCategoriesResponse>("getCategories", params);
};

