import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/home/product-card/product-card/product/product.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductCardComponent } from './pages/home/product-card/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductFullPageComponent } from './pages/product-full-page/product-full-page.component';
import { CartItemComponent } from './pages/cart/cart-item/cart-item.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductComponent,
    HeaderComponent,
   
    CartComponent,
    HomeComponent,
    ProductFullPageComponent,
    CartItemComponent,
    ProductDetailsComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
