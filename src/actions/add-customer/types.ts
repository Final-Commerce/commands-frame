// Shared Customer Types (re-exported from get-customers for consistency)
import type { Customer, AddressDto, CustomerMetadata, CustomerNote } from "../get-customers/types";

export { Customer, AddressDto, CustomerMetadata, CustomerNote };

// Add Customer Types
export interface AddCustomerParams {
    customer: {
        email: string; // Required
        firstName?: string;
        lastName?: string;
        phone?: string;
        tags?: string[];
        metadata?: CustomerMetadata[];
        notes?: CustomerNote[];
        billing?: AddressDto;
        shipping?: AddressDto;
        totalSpent?: string;
        lastAction?: Date | string;
        outletId?: string;
        externalId?: string;
        fromOliver?: boolean;
        [key: string]: any; // Allow additional fields
    };
}

export interface AddCustomerResponse {
    success: boolean;
    customer: Customer;
    timestamp: string;
}

export type AddCustomer = (params: AddCustomerParams) => Promise<AddCustomerResponse>;

