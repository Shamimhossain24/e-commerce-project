import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  /*** products area */
  products: any[] = [
    {
      _id:1,
      image: './assets/images/temp/products/01.png',
      name: 'Capsicum',
      prvPrice: 90,
      currPrice: 80,
      unit: 'piece',
      routerLink:"/product-details"
    },
    {
      _id:2,
      image: './assets/images/temp/products/02.png',
      name: 'Carrot',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:3,
      image: './assets/images/temp/products/03.png',
      name: 'Tomato',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:4,
      image: './assets/images/temp/products/07.jpg',
      name: 'Onion',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:5,
      image: './assets/images/temp/products/05.png',
      name: 'Banana',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:6,
      image: './assets/images/temp/products/06.png',
      name: 'Guava ',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:7,
      image: './assets/images/temp/products/07.png',
      name: 'Licu',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:8,
      image: './assets/images/temp/products/08.png',
      name: 'Pine Apple',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },

    {
      _id:9,
      image: './assets/images/temp/products/09.png',
      name: 'Mango',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:10,
      image: './assets/images/temp/products/10.png',
      name: 'Potato ',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:11,
      image: './assets/images/temp/products/01.png',
      name: 'Capsicum',
      prvPrice: 90,
      currPrice: 80,
      unit: 'piece',
      routerLink:"/product-details"
    },
    {
      _id:12,
      image: './assets/images/temp/products/02.png',
      name: 'Carrot',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:13,
      image: './assets/images/temp/products/03.png',
      name: 'Tomato',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:14,
      image: './assets/images/temp/products/07.jpg',
      name: 'Onion',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
    {
      _id:15,
      image: './assets/images/temp/products/05.png',
      name: 'Banana',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      routerLink:"/product-details"
    },
  ];


}
