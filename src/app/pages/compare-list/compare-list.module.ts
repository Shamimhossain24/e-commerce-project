import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareListRoutingModule } from './compare-list-routing.module';
import { CompareListComponent } from './compare-list.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    CompareListComponent
  ],
  imports: [
    CommonModule,
    CompareListRoutingModule,
    MaterialModule
  ]
})
export class CompareListModule { }
