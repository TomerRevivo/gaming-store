import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartComponent } from '../pages/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {



  constructor(private httpClient:HttpClient) { }
  productList:Product[] = []
  selectedProduct:Product = new Product('');
  addProductToList(product:Product){
    this.productList.push(product)
  }
  saveUserMail(email: string, name: string) {
    return this.httpClient.post<{}>("http://localhost:4100/subscriptions",{email:email,name:name}); 
  
  }
}