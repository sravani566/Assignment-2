import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HobbicmpComponent } from './hobbicmp/hobbicmp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CategorylistComponent,
    ProductNotFoundComponent,
    ProductDetailComponent,
    HobbicmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
