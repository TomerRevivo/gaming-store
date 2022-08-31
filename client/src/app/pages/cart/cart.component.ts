import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductCardComponent } from '../home/product-card/product-card/product-card.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //here we need to add the values of the pruducr cheoosen

  price = 0;
  cartItems: Product[] = [];
  cartTotal = 0;
  constructor(private messengerService: MessengerService) {}

  /*
  addProductToCart(product:Product)
  {
    console.log('aadProductToCardStart NOW' );
    console.log(product)
    this.messengerService.addProductToList(product)
  this.cartTotal=0
    this.cartItems.forEach(
      item=>{
        this.cartTotal+=(item.count * item.price)
      }
    )
  }
*/

  ngOnInit() {
    this.cartItems = this.messengerService.productList;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.price;
    });
  }
}
