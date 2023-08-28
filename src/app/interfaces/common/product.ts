import { Brand } from "./brand";
import { Category, SubCategory } from "./category";

export interface Product {
    _id: string;
    name: string;
    slug?:string;
    images: string[] | any[];
    salePrice: number;
    rating:number;
    unit:string;
    tag?:string;
    prevPrice?: number;
    category: Category;
    subCategory: SubCategory;
    brand: Brand;
    discountAmmount: number;
}
