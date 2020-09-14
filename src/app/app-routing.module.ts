import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlogComponent } from '../app/adminlog/adminlog.component';
import { UserlogComponent } from '../app/userlog/userlog.component';
import { RegComponent } from '../app/reg/reg.component';
import { CartComponent } from '../app/cart/cart.component';
import { AdminComponent } from '../app/admin/admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component'

const routes: Routes =[
  { path: "adminlog", component: AdminlogComponent },
  { path: "top-bar", component: TopBarComponent},
  { path: "userlog", component: UserlogComponent},
  { path: "reg", component: RegComponent},
  { path: "product-list", component: ProductListComponent},
  { path: "cart", component: CartComponent},
  { path: "admin", component: AdminComponent},
  { path: "products/:productId", component: ProductDetailsComponent},
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} export const
RoutingComponent = [AdminlogComponent,UserlogComponent,RegComponent,ProductListComponent,CartComponent,AdminComponent,ProductDetailsComponent,TopBarComponent];

