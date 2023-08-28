import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoryRoutingModule } from './sub-category-routing.module';
import { SubCategoryComponent } from './sub-category.component';
import { ProductCardOneModule } from 'src/app/shared/lazy-component/product-card-one/product-card-one.module';


@NgModule({
  declarations: [
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    SubCategoryRoutingModule,
    ProductCardOneModule
  ]
})
export class SubCategoryModule { }
