import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAddressComponent } from './add-address/add-address.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  preferredDate: Date = new Date();
  today: any = new Date();


  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }


  
  openDialog(){
    this.dialog.open(AddAddressComponent,{
      maxWidth:"450px",
      width:"100%",
      height:"auto"
    })
  }









  paymentMethods = [
    {
      name: 'Cash on Delivery',
      image: '/assets/images/payments/cash-on-delivery.png',
      slug: 'cash_on_delivery',
    },
    {
      name: 'Bkash',
      image: '/assets/images/payments/bkash-icon.png',
      slug: 'bkash',
    },
    {
      name: 'Nagad',
      image: '/assets/images/payments/Nagad-Logo.png',
      slug: 'nagad',
    },
    {
      name: 'Rocket',
      image: '/assets/images/payments/rocket-icon.png',
      slug: 'rocket',
    },
    {
      name: 'American Express',
      image: '/assets/images/payments/amex-icon.png',
      slug: 'american_express',
    },
    {
      name: 'Visa / Master Card',
      image: '/assets/images/payments/visa-icon.png',
      slug: 'card',
    },
   
  
  ]
  deliverTimes: any[] =  [
    {value: '8.30 am to 10.00 am', viewValue: '8.30 am to 10.00 am', end: 8},
    {value: '10.00 am to 11.30 am', viewValue: '10.00 am to 11.30 am', end: 10},
    {value: '11.30 am to 01.00 pm', viewValue: '11.30 am to 01.00 pm', end: 11},
    {value: '01.00 pm to 02.30 pm', viewValue: '01.00 pm to 02.30 pm', end: 13},
    {value: '02.30 pm to 04.00 pm', viewValue: '02.30 pm to 04.00 pm', end: 15},
    {value: '04.00 pm to 05.30 pm', viewValue: '04.00 pm to 05.30 pm', end: 16},
    {value: '05.30 pm to 07.00 pm', viewValue: '05.30 pm to 07.00 pm', end: 17},
    {value: '07.00 pm to 08.30 pm', viewValue: '07.00 pm to 08.30 pm', end: 19},
  ];


}
