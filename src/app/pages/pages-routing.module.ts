import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:"product-details",
        loadChildren: () => import ('./product-details/product-details.module').then(m => m.ProductDetailsModule)
      },
      {
        path:'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
      },
      {
        path:"product-list",
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
      },
      {
        path:"login",
        loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule)
      },
      {
        path:"registration",
        loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path:"reset-password",
        loadChildren: () => import('./user/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
           {
        path: "category",
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: "sub-category",
        loadChildren: () => import('./sub-category/sub-category.module').then(m => m.SubCategoryModule)
      },
      {
        path:"account",
        loadChildren: () => import('./user/account/account.module').then(m => m.AccountModule)
      },
      {
        path:"cart",
        loadChildren: () => import('./user/cart/cart.module').then(m => m.CartModule)
      },
      {
        path:"checkout",
        loadChildren: () => import('./user/checkout/checkout.module').then(m => m.CheckoutModule)
      },
      {
        path:"order-confirm",
        loadChildren: () => import('./user/order-confirmation/order-confirmation.module').then(m => m.OrderConfirmationModule)
      },
      {
        path:"wishlist",
        loadChildren : () => import('./wishlist-page/wishlist-page.module').then((m) => {return m.WishlistPageModule})
      },
      {
        path:"compare-list",
        loadChildren: () => import('./compare-list/compare-list.module').then((m) => { return m.CompareListModule})
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
