// Reorder Active Order Types
export interface ReorderActiveOrderResponse {
    success: boolean;
    hasOutOfStockItems: boolean;
    inStockProductsCount: number;
    outOfStockProductsCount: number;
    timestamp: string;
}

export type ReorderActiveOrder = () => Promise<ReorderActiveOrderResponse>;

