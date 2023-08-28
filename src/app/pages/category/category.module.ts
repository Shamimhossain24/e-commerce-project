import { CategoryCardModule } from './../../shared/lazy-component/category-card/category-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CategoryCardModule
  ]
})
export class CategoryModule { }
