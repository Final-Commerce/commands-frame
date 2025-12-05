/**
 * Authenticate user action
 * Calls the authenticateUser action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    AuthenticateUser,
    AuthenticateUserParams,
    AuthenticateUserResponse
} from "./types";

export const authenticateUser: AuthenticateUser = async (params?: AuthenticateUserParams): Promise<AuthenticateUserResponse> => {
    return await commandsFrameClient.call<AuthenticateUserParams, AuthenticateUserResponse>("authenticateUser", params);
};

