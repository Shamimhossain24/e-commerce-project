import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ObserversModule } from '@angular/cdk/observers';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    ObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
