// Shared Customer Types (based on customer.schema.ts)
export interface AddressDto {
    firstName?: string;
    lastName?: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    country: string;
    postCode: string;
}

export interface CustomerMetadata {
    key: string;
    value: string;
}

export interface CustomerNote {
    createdAt: Date | string;
    message: string;
}

export interface Customer {
    _id?: string;
    id?: string;
    companyId?: string;
    externalId?: string;
    email: string;
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
    fromOliver: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

// Get Customers Types
export interface GetCustomersParams {
    query?: {
        // MongoDB query fields
        email?: string | { $regex?: string; $options?: string };
        firstName?: string | { $regex?: string; $options?: string };
        lastName?: string | { $regex?: string; $options?: string };
        phone?: string | { $regex?: string; $options?: string };
        tags?: string | { $in?: string[] };
        outletId?: string;
        // Text search (searches across firstName, lastName, email, phone)
        // This is handled by the handler, not directly in query
        [key: string]: any;
    };
}

export interface GetCustomersResponse {
    customers: Customer[];
    total?: number;
    timestamp: string;
}

export type GetCustomers = (params?: GetCustomersParams) => Promise<GetCustomersResponse>;

