// Park Order Types
export interface ParkOrderResponse {
    success: boolean;
    timestamp: string;
}

export type ParkOrder = () => Promise<ParkOrderResponse>;

