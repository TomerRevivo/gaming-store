import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Product} from 'src/app/models/product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
//here we have the list of products called products ! 
export class ProductService {
//here we need to take the information from the mongoDB , server js wq build 


  products :Product[] = [
    new Product("https://goldtop.co.il/upload_files/Asus%20ROG%20STRIX%20G512LI-BI7N10%20%201.jpg",
    "ASUS Rog",15000, "Intel® Core™ i7-8750H Processor 2.2 GHz (9M Cache, up to 4.1 GHz", "https://rog.asus.com/il/laptops/rog-flow/2021-rog-flow-x13-series/"),
   new Product("assets/images/jbl.jpg",
    "JBL E500BT",1000, "JBL SIGNATURE SOUND:               50mm drivers the JBL sound", "https://www.payngo.co.il/255462.html"),
    new Product("https://www.payngo.co.il/media/catalog/product/cache/6b2f4d2b8c238597c4864fc429fa65dd/1/0/10362-000-02.jpg",
    "Xbox series s",2000,
    "Next generation preformance in the smallest xbox ever","https://www.xbox.com/he-IL/consoles/xbox-series-s"),
   new Product("https://ksp.co.il/shop/items/512/183726.jpg",
    "Samsung 55'' QLED 4K",5000,"SAMSUNG 55 Class QLED Q60A Series-4K UHD Dual LED Quantum",
    "https://www.samsung.com/il/tvs/qled-tv/q70t-55-inch-qled-4k-smart-tv-qe55q70tatxsq/"),
    new Product("https://d3m9l0v76dty0.cloudfront.net/system/photos/6782516/large/1a9bb40c8dc85753b6b419980e30c03e.jpg",
    "Galaxy s21",3400,"Professional-level camera: Zoom in closely, take photos and videos",
    "https://www.amazon.com/Samsung-Unlocked-Smartphone-Pro-Grade-SM-G991UZVAXAA/dp/B08N3J7GJ8"),
    new Product("https://ksp.co.il/shop/items/512/181880.jpg",
    "Sony Alpha 6400",5000,"Exmor RS CMOS sensor with DRAM, large key 24-70mm1 F1.8-2.8 ZEISS",
    "https://www.amazon.com/Sony-Alpha-a6400-Mirrorless-Camera/dp/B07MV3P7M8"),
    new Product("data:image/jpeg;base64,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",
    "Playstation 5",2500,"You can shoot your game and share it with others on PlayStation ™",
    "https://www.playstation.com/he-il/ps5/"),
   new Product("https://d3m9l0v76dty0.cloudfront.net/system/photos/4289141/large/587a7c46c0ce9bbd57dfc52ecbde2b29.jpg",
    "Gaming chair",1100,"Gamers seat Dragon Space RGB Chair white Dear customer","https://bdk-group.com/product/%D7%9B%D7%99%D7%A1%D7%90-%D7%92%D7%99%D7%99%D7%9E%D7%99%D7%A0%D7%92-%D7%A2%D7%9D-%D7%90%D7%95%D7%A8%D7%95%D7%AA-%D7%9C%D7%91%D7%9F-cobra-c6m-rgb-el/?gclid=Cj0KCQiAwqCOBhCdARIsAEPyW9mLJP4ME33dsPZgQTe8tEndy9otSOwPGDHBjsY06aU3JQiNoK4fnsgaAsr6EALw_wcB"),
    new Product("https://d3m9l0v76dty0.cloudfront.net/system/photos/6930930/large/c612004d1ddc153f51f09843de43594b.jpg",
    "Lenovo Legion K300 RGB",250,"Lenovo K300 Gaming Keyboard",
    "https://www.amazon.com/Lenovo-GY40Y57708-K300-Gaming-Keyboard/dp/B08G8WTPVW"),
    new Product("https://www.phoneplay.co.il/images/itempics/507_large.jpg",
    "Razer Atheris mouse",400,"Razer Atheris Ambidextrous Wireless Mouse: 7200 DPI Optical Sensor",
    "https://www.amazon.com/Razer-Atheris-Ambidextrous-Wireless-Mouse/dp/B0744KT1TZ")
  ]



  constructor(private httpClient: HttpClient) {

   }


   getAllProducts(){
    return this.httpClient.get<Product[]>("http://localhost:4100/getAllProducts"); 
  }

  //todo: api here 
  getProducts() : Product[]{
    return this.products;
  }
}
