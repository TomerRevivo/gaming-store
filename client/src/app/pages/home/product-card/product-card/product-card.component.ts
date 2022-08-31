import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product
  
  constructor(private messengerService : MessengerService) { 
    this.product = new Product('','',0,'','');
  }

  ngOnInit(): void {
  }

  handleAddToCart(){
     console.log('handleAddToCart : call sendmsg ' );
     this.messengerService.addProductToList(this.product)
  
   
  }
  viewDetails(){
    this.messengerService.selectedProduct = this.product
  }

}
