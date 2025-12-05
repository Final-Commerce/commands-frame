// Partial Payment Types
export interface PartialPaymentParams {
    amount?: number;
    isPercent?: boolean;
    openUI?: boolean;
}

export interface PartialPaymentResponse {
    success: boolean;
    amount?: number;
    isPercent?: boolean;
    openUI: boolean;
    timestamp: string;
}

export type PartialPayment = (params?: PartialPaymentParams) => Promise<PartialPaymentResponse>;

