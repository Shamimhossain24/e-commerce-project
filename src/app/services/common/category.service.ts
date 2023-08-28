import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ALL_CATEGORY } from 'src/app/core/db/category.db';
import { Category } from 'src/app/interfaces/common/category';
import {ResponseType} from 'src/app/interfaces/core/response-type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  allCategory: Category[] = ALL_CATEGORY;
  constructor() { }


  /**
   * CATEGORY OBSERABLE REQUEST 
   * getAllCategory
   */

  getAllCategory(): Observable<ResponseType> {
    const allCategoryObser = Observable.create((observer: Observer<ResponseType>) => {
      if (this.allCategory && this.allCategory.length > 0) {
        setTimeout(() => {
          let response = {
            data: this.allCategory,
            success: true,
            message: "Your Data Successfully Loaded",
            count: this.allCategory.length
          }
          observer.next(response);
        }, 1000)
      } else {
        observer.error('Product Not Found');
        observer.complete();
      }
    });

    return allCategoryObser;
  }

}
