import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import {ProductNotFoundComponent} from './product-not-found/product-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';



const routes: Routes = [
  { path : 'products/:id', component: ProductDetailComponent},
  { path : '', redirectTo: '/products', pathMatch: 'full'},
  { path : 'products', component: ProductlistComponent},
  { path : 'category', component: CategorylistComponent},
  { path : '**', component: ProductNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
