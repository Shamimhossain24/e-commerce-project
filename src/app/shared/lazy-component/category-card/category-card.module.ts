import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card.component';



@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CategoryCardComponent
  ]
})
export class CategoryCardModule { }
