import { PathLocationStrategy } from "@angular/common";

export class Product{
    image:string='';
    title:string = '';
    price:number = 0;
    details:string = '';
    link:string = '';

    constructor(image:string,title:string = '',
    price:number = 0,details:string = '',link:string = ''){
        this.image = image;
        this.title = title;
        this.price = price;
        this.details = details;
        this.link = link;
    }

    getPrice(){
        return this.price;
    }

    fullDataAd(): string{
        return '${this.image} ${this.title} ${this.price} ${this.details} ${this.link}';
    }
}

