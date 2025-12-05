// Set Refund Stock Action Types
export interface SetRefundStockActionParams {
    itemKey: string; // internalId or variantId
    action: 'RESTOCK' | 'REFUND_DAMAGE';
}

export interface SetRefundStockActionResponse {
    success: boolean;
    itemKey: string;
    action: string;
    timestamp: string;
}

export type SetRefundStockAction = (params?: SetRefundStockActionParams) => Promise<SetRefundStockActionResponse>;

