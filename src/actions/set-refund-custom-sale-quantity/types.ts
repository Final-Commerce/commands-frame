// Set Refund Custom Sale Quantity Types
export interface SetRefundCustomSaleQuantityParams {
    customSaleId: string;
    quantity: number; // 0 to max remaining refundable
}

export interface SetRefundCustomSaleQuantityResponse {
    success: boolean;
    customSaleId: string;
    quantity: number;
    timestamp: string;
}

export type SetRefundCustomSaleQuantity = (params?: SetRefundCustomSaleQuantityParams) => Promise<SetRefundCustomSaleQuantityResponse>;

