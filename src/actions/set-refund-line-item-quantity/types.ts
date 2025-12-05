// Set Refund Line Item Quantity Types
export interface SetRefundLineItemQuantityParams {
    itemKey: string; // internalId or variantId
    quantity: number; // 0 to max remaining refundable
}

export interface SetRefundLineItemQuantityResponse {
    success: boolean;
    itemKey: string;
    quantity: number;
    timestamp: string;
}

export type SetRefundLineItemQuantity = (params?: SetRefundLineItemQuantityParams) => Promise<SetRefundLineItemQuantityResponse>;

