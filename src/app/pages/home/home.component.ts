import { ProductDetailsService } from './../../services/product-details.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/common/category';
import { CategoryService } from 'src/app/services/common/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  //Store Data
  categories!: Category[];

  //isLoading Boolean Variables
  isLoadingCategory: boolean = false;

  //Subscription
  private subCategoryData!: Subscription;


  constructor(
    private categoryService: CategoryService

  ) { }

  
  ngOnInit(): void {
    //Base Data
    this.getAllCategory();

    /*
     * Call setTimer();
     */
    setInterval(() => {
      this.setTimer();
    }, 1000)
  }

  /**
   * OBSERABLE REQUEST HANDLE
   * getAllCategory()
   */
  getAllCategory() {
    this.isLoadingCategory = true;
    this.subCategoryData = this.categoryService.getAllCategory().subscribe(
      (res) => {
        if (res.success) {
          console.log(res.data);
          this.isLoadingCategory = false;
        }
      },
      (err) => {
        if (err) {
          this.isLoadingCategory = false;
          console.log(err);
        }
      }
    )
  }


  /**
   * ON DESTROY ALL SUBSCRIPTIONS
   */

  ngOnDestroy(): void {
    if (this.subCategoryData) {
      this.subCategoryData.unsubscribe();
    }
  }











  /*** clock calculation */
  days: any;
  hours: any;
  min: any;
  sec: any;
  result: any;
  /**
   * setTimer()
   */
  setTimer() {
    var dest = new Date("jan 3, 2023 10:00:00").getTime();
    var now = new Date().getTime();
    var diff = dest - now;
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.sec = Math.floor((diff % (1000 * 60)) / 1000);;
    /**
     * Some Condition
     */
    if (this.days < 10) {
      this.days = '0' + this.days;
    }
    if (this.hours < 10) {
      this.hours = "0" + this.hours;
    }
    if (this.min < 10) {
      this.min = "0" + this.min;
    }
    if (this.sec < 10) {
      this.sec = "0" + this.sec;
    }/* condition end */
    /*  Result */
    this.result = `${this.days} : ${this.hours} : ${this.min} : ${this.sec}`;
  }


  /*** products area */
  products: any[] = [
    {
      _id: 1,
      image: './assets/images/temp/products/01.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 2,
      image: './assets/images/temp/products/02.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 3,
      image: './assets/images/temp/products/03.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 4,
      image: './assets/images/temp/products/04 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 5,
      image: './assets/images/temp/products/05 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 6,
      image: './assets/images/temp/products/06.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 7,
      image: './assets/images/temp/products/07.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id: 8,
      image: './assets/images/temp/products/08.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
  ];


  /****
   * category Data
   */
  categoryData: any[] = [
    {
      _id: 1,
      title: "Meat Items",
      subTitle: "(24 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/meat.jpg"
    },
    {
      _id: 2,
      title: "Dairy Items",
      subTitle: "(24 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/dairy.jpg"
    },
    {
      _id: 3,
      title: "Vegetables Items",
      subTitle: "(25 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/vegetables.jpg"
    },
    {
      _id: 4,
      title: "Fish Items",
      subTitle: "(27 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/fish.jpg"
    },
    {
      _id: 5,
      title: "Groceries Items",
      subTitle: "(24 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/groceries.jpg"
    },
  ]

  /****
 * category Data
 */
  brandData: any[] = [
    {
      _id: 1,
      title: "Natural Greeny",
      subTitle: "(45 items)",
      routerLink: '#',
      image: "./assets/images/temp/image/07.jpg"
    },
    {
      _id: 2,
      title: "Vegan Lover",
      subTitle: "(45 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/08.jpg"
    },
    {
      _id: 3,
      title: "organic foody",
      subTitle: "(35 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/09.jpg"
    },
    {
      _id: 4,
      title: "Ecomart Limited",
      subTitle: "(27 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/10.jpg"
    },
    {
      _id: 5,
      title: "Fresh Fortune",
      subTitle: "(34 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/11.jpg"
    },
    {
      _id: 6,
      title: "Econature",
      subTitle: "(34 Items)",
      routerLink: '#',
      image: "./assets/images/temp/image/12.jpg"
    },
  ]


  featureData: any[] = [
    {
      image: './assets/images/temp/products/09.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc: `Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink: "/product-details"
    },
    {
      image: './assets/images/temp/products/10.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc: `Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink: "/product-details"

    },
    {
      image: './assets/images/temp/products/11.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc: `Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink: "/product-details"
    },
    {
      image: './assets/images/temp/products/12.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc: `Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink: "/product-details"
    },
    {
      image: './assets/images/temp/products/13.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc: `Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink: "/product-details"
    },
    {
      image: './assets/images/temp/products/14.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc: `Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink: "/product-details"
    },
  ];

}
