import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected links : Array<Link> =[]; 

  constructor(private httpClient: HttpClient) { 
    this.links.push(new Link('', 'Gaming Store'));
    this.links.push(new Link('home', 'Home'));
    this.links.push(new Link('aboutus', 'About us'));
    this.links.push(new Link('registration', 'Registration'));
    this.links.push(new Link('cart','Cart'));
  }

  getLinks() : Array<Link>{
  return this.links; 
  }

 
}
