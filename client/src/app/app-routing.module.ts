import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/home/product-card/product-card/product/product.component';
import { HomeComponent } from './pages/home/home.component';  
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {path: '' ,component : ProductComponent}, 
  {path: 'home',component: ProductComponent},
  {path: 'cart',component: CartComponent},
  {path:'productDetails', component: ProductDetailsComponent},
  {path: 'registration',component: SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompnents =[ProductComponent, CartComponent]
