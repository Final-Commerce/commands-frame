// Resume Parked Order Types
export interface ResumeParkedOrderParams {
    orderId: string;
}

export interface ResumeParkedOrderResponse {
    success: boolean;
    orderId: string;
    timestamp: string;
}

export type ResumeParkedOrder = (params?: ResumeParkedOrderParams) => Promise<ResumeParkedOrderResponse>;

