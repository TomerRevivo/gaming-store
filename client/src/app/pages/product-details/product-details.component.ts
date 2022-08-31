import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:Product;
  constructor(private messengerService:MessengerService) {
   this.product=this.messengerService.selectedProduct
   }

  ngOnInit(): void {
  }

}
