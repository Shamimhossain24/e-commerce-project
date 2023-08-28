import { Product } from "src/app/interfaces/common/product";

export const PRODUCTS: Product[] = [
    {
        _id: "64e0db6ff7243e20d6650d85",
        name: "Fresh Green Chilis",
        slug: "fresh-green-chilis",
        images: ['./assets/images/temp/products/01.jpg'],
        rating: 4.5,
        unit: "Kilo",
        salePrice: 23,
        prevPrice: 34,
        tag: "new",
        discountAmmount: 11,
        category: {
            _id: "64e0dc39170c7402f53bbfb8",
            name: "Vegetables",
            slug: "vegetables"
        },
        brand: {
            _id: "64e0dd364f387367be9e2cd1",
            name: "Natural Greeny",
            slug: "natural-greeny"
        },
        subCategory: {
            _id: "64e0dcf9afc01dccba8e50d5",
            name: "Carrot",
            slug: "carrot"
        }
    }
]