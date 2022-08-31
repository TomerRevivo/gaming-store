import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() links: Array<Link> = [];

  
  constructor(public messengerService: MessengerService) {
      this.links.push(new Link('', 'Gaming Store'));
      this.links.push(new Link('home', 'Home'));
    //  this.links.push(new Link('aboutus', 'About us'));
      this.links.push(new Link('registration', 'Registration'));
      this.links.push(new Link('cart','Cart'));
     // this.links = dataService.getLinks();
   }

  ngOnInit(): void {
  }

  public getLinks():Array<Link>{
    return this.links;
  }

}
