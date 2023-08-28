import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /****
 * category Data
 */
   categoryData:any[] =[
     {
      _id:"1",
      categoryName:"Groceries",
      subCategory:[
        {
          _id:1,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
          
        },
        {
          _id:2,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:3,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:4,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:5,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:6,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:7,
          title:"Desserts",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/readymix dessert.png",
          totalItem:"47"
        },
        {
          _id:8,
          title:"Vegetables",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/vegetable.png",
          totalItem:"47"
        },
        {
          _id:9,
          title:"Fruits",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fruits.png",
          totalItem:"47"
        },
        {
          _id:10,
          title:"Shemai",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dessert.png",
          totalItem:"47"
        },
        {
          _id:11,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:12,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
        {
          _id:13,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
        },
        {
          _id:14,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:15,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:16,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:17,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:18,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:19,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:20,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
      ]
     },
     {
      _id:"2",
      categoryName:"Essentials",
      subCategory:[
        {
          _id:1,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
          
        },
        {
          _id:2,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:3,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:4,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:5,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:6,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:7,
          title:"Desserts",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/readymix dessert.png",
          totalItem:"47"
        },
        {
          _id:8,
          title:"Vegetables",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/vegetable.png",
          totalItem:"47"
        },
        {
          _id:9,
          title:"Fruits",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fruits.png",
          totalItem:"47"
        },
        {
          _id:10,
          title:"Shemai",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dessert.png",
          totalItem:"47"
        },
        {
          _id:11,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:12,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
        {
          _id:13,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
        },
        {
          _id:14,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:15,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:16,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:17,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:18,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:19,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:20,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
      ]
     },
     {
      _id:"3",
      categoryName:"Dairy",
      subCategory:[
        {
          _id:1,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
          
        },
        {
          _id:2,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:3,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:4,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:5,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:6,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:7,
          title:"Desserts",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/readymix dessert.png",
          totalItem:"47"
        },
        {
          _id:8,
          title:"Vegetables",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/vegetable.png",
          totalItem:"47"
        },
        {
          _id:9,
          title:"Fruits",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fruits.png",
          totalItem:"47"
        },
        {
          _id:10,
          title:"Shemai",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dessert.png",
          totalItem:"47"
        },
        {
          _id:11,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:12,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
        {
          _id:13,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
        },
        {
          _id:14,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:15,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:16,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:17,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:18,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:19,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:20,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
      ]
     },
     {
      _id:"4",
      categoryName:"Meat",
      subCategory:[
        {
          _id:1,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
          
        },
        {
          _id:2,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:3,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:4,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:5,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:6,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:7,
          title:"Desserts",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/readymix dessert.png",
          totalItem:"47"
        },
        {
          _id:8,
          title:"Vegetables",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/vegetable.png",
          totalItem:"47"
        },
        {
          _id:9,
          title:"Fruits",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fruits.png",
          totalItem:"47"
        },
        {
          _id:10,
          title:"Shemai",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dessert.png",
          totalItem:"47"
        },
        {
          _id:11,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:12,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
        {
          _id:13,
          title:"Groceries",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Grocery.png",
          totalItem:"47"
        },
        {
          _id:14,
          title:"Essentials",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Essentials.png",
          totalItem:"47"
        },
        {
          _id:15,
          title:"Dairy",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Dairy.png",
          totalItem:"47"
        },
        {
          _id:16,
          title:"Meat",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/meat.png",
          totalItem:"47"
        },
        {
          _id:17,
          title:"Health Care",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Health Care.png",
          totalItem:"47"
        },
        {
          _id:18,
          title:"Fish",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Fish.png",
          totalItem:"47"
        },
        {
          _id:19,
          title:"Bakery & Snacks",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Bakery & Snacks.png",
          totalItem:"47"
        },
        {
          _id:20,
          title:"Household",
          routerLink:'../sub-category',
          image:"./assets/images/temp/image/Household & Cleaning.png",
          totalItem:"47"
        },
      ]
     }
  ]


}
