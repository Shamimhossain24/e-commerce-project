import { environment } from "src/environments/environment";

export const GLOBAL_VARIABLES: any = Object.freeze({
    userCart: 'GREENY_CART_LIST' + environment.version,
    userWishlist: 'GREENY_WISH_LIST' + environment.version,
    userOrderlist: 'GREENY_ORDER_LIST' + environment.version,
    userComparelist: 'GREENY_COMPARE_LIST' + environment.version,
})