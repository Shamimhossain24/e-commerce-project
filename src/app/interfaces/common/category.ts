export interface Category {
    _id: string;
    name: string;
    slug: string;
    image?: string;
    subCategory?: SubCategory[];
}

export interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    image?: string;
}