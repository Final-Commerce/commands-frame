// Re-export Customer type from get-customers
import type { Customer } from "../get-customers/types";

export { Customer };

// Assign Customer Types
export interface AssignCustomerParams {
    customerId: string;
}

export interface AssignCustomerResponse {
    success: boolean;
    customer: Customer;
    timestamp: string;
}

export type AssignCustomer = (params: AssignCustomerParams) => Promise<AssignCustomerResponse>;
