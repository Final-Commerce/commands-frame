// Shared Product Types (based on product.schema.ts and variant.schema.ts)

export interface ProductAttribute {
    name?: string;
    values: string[];
}

export interface ProductMetadata {
    key?: string;
    value?: string;
}

export interface VariantAttribute {
    name?: string;
    value?: string;
}

export interface VariantInventory {
    stock?: number;
    outletId?: string;
}

export interface VariantMetadata {
    key?: string;
    value?: string;
}

export interface Variant {
    _id?: string;
    id?: string;
    companyId?: string;
    productId: string;
    allowBackorder?: boolean;
    attributes?: VariantAttribute[];
    barcode?: string;
    externalId?: string;
    images: string[];
    inventory?: VariantInventory[];
    manageStock?: boolean;
    isOnSale?: boolean;
    metadata?: VariantMetadata[];
    price?: string;
    salePrice?: string;
    sku?: string;
    costPrice?: string;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export interface Product {
    _id?: string;
    id?: string;
    companyId?: string;
    externalId?: string;
    taxTable?: string;
    name: string;
    description?: string;
    shortDescription?: string;
    images?: string[];
    categories?: string[];
    attributes?: ProductAttribute[];
    tags?: string[];
    supplier?: string;
    metadata?: ProductMetadata[];
    fromOliver?: boolean;
    sku?: string;
    status?: string;
    productType: string;
    source?: string;
    outlets?: string[];
    minPrice?: string;
    maxPrice?: string;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export interface ProductWithVariants extends Product {
    variants?: Variant[];
}

// Get Products Types
export interface GetProductsParams {
    query?: {
        // MongoDB query fields
        name?: string | { $regex?: string; $options?: string };
        sku?: string | { $regex?: string; $options?: string };
        status?: string;
        productType?: string;
        categories?: string | { $in?: string[] };
        tags?: string | { $in?: string[] };
        supplier?: string;
        externalId?: string;
        // Text search (searches across name, sku)
        // This is handled by the handler, not directly in query
        [key: string]: any;
    };
}

export interface GetProductsResponse {
    products: Product[] | ProductWithVariants[];
    timestamp: string;
}

export type GetProducts = (params?: GetProductsParams) => Promise<GetProductsResponse>;

