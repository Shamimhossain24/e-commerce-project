import { Category } from "../common/category";

export interface ResponseType{
    data:Category[];
    success:boolean;
    message:string;
    count:number;
}