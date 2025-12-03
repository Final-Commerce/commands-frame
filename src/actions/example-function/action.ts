/**
 * Example function action
 * Calls the exampleFunction action on the parent window
 */

import { commandsFrameClient } from "../../client";
import type {
    ExampleFunction,
    ExampleFunctionParams,
    ExampleFunctionResponse
} from "./types";

export const exampleFunction: ExampleFunction = async (params?: ExampleFunctionParams): Promise<ExampleFunctionResponse> => {
    return await commandsFrameClient.call<ExampleFunctionParams, ExampleFunctionResponse>("exampleFunction", params);
};

