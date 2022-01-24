export interface IPetRequest {
    category?:  Category;
    id?:        number;
    name?:      string;
    photoUrls?: string[];
    /**
     * pet status in the store
     */
    status?: Status;
    tags?:   Tag[];
}

export interface Category {
    id?:   number;
    name?: string;
}

/**
 * pet status in the store
 */
export enum Status {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

export interface Tag {
    id?:   number;
    name?: string;
}
