import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistPageRoutingModule } from './wishlist-page-routing.module';
import { WishlistPageComponent } from './wishlist-page.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    WishlistPageComponent
  ],
  imports: [
    CommonModule,
    WishlistPageRoutingModule,
    MaterialModule
  ]
})
export class WishlistPageModule { }
