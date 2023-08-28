import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAddressComponent } from './add-address/add-address.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddAddressComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutModule { }
